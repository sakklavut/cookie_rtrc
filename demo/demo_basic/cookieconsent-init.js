// obtain cookieconsent plugin
var cc = initCookieConsent();

// example logo
var logo = '<img src="../assets/logo/logo.jpg" alt="Logo" loading="lazy" style="margin-left: -4px; margin-bottom: -5px; height: 35px">';
var cookie = '🍪';

// run plugin with config object
cc.run({
    current_lang : 'en',
    autoclear_cookies : true,                   // default: false
    cookie_name: 'cc_cookie_demo1',             // default: 'cc_cookie'
    cookie_expiration : 365,                    // default: 182
    page_scripts: true,                         // default: false

    // auto_language: null,                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                           // default: true
    // delay: 0,                                // default: 0
    // force_consent: false,
    // hide_from_bots: false,                   // default: false
    // remove_cookie_tables: false              // default: false
    // cookie_domain: location.hostname,        // default: current domain
    // cookie_path: "/",                        // default: root
    // cookie_same_site: "Lax",
    // use_rfc_cookie: false,                   // default: false
    // revision: 0,                             // default: 0

    gui_options: {
        consent_modal: {
            layout: 'cloud',                      // box,cloud,bar
            position: 'bottom right',           // bottom,middle,top + left,right,center
            transition: 'zoom'                 // zoom,slide
        },
        settings_modal: {
            layout: 'box',                      // box,bar
            // position: 'left',                // right,left (available only if bar layout selected)
            transition: 'slide'                 // zoom,slide
        }
    },

    onFirstAction: function(){
        console.log('onFirstAction fired');
    },

    onAccept: function (cookie) {
        console.log('onAccept fired ...');
    },

    onChange: function (cookie, changed_preferences) {
        console.log('onChange fired ...');
    },

    languages: {
        'en': {
            consent_modal: {
                title: cookie + 'เราใช้คุกกี้!',
                description: 'สวัสดี เว็บไซต์นี้ใช้คุกกี้ที่จำเป็นเพื่อให้แน่ใจว่ามีการทำงานที่เหมาะสมและติดตามคุกกี้เพื่อทำความเข้าใจว่าคุณโต้ตอบกับเว็บไซต์อย่างไร หลังจะถูกตั้งค่าหลังจากได้รับความยินยอมเท่านั้น <button type="button" data-cc="c-settings" class="cc-link">เปลี่ยนแปลงความยินยอม</button>',
                primary_btn: {
                    text: 'ยอมรับทั้งหมด',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'ปฏิเสธทั้งหมด',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: logo,
                save_settings_btn: 'บันทึกตั้งค่า',
                accept_all_btn: 'ยอมรับทั้งหมด',
                reject_all_btn: 'ปฏิเสธทั้งหมด',
                close_btn_label: 'ปิด',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'},
                    {col5: 'Category'}
                ],
                blocks: [
                    {
                        title: 'คุกกี้พื้นฐานที่จำเป็น',
                        description: 'คุกกี้พื้นฐานที่จำเป็น เพื่อช่วยให้การทำงานหลักของเว็บไซต์ใช้งานได้ รวมถึงการเข้าถึงพื้นที่ที่ปลอดภัยต่าง ๆ ของเว็บไซต์ หากไม่มีคุกกี้นี้เว็บไซต์จะไม่สามารถทำงานได้อย่างเหมาะสม และจะใช้งานได้โดยการตั้งค่าเริ่มต้น  โดยไม่สามารถปิดการใช้งานได้ <a href="#" class="cc-link">รายละเอียดของคุกกี้</a>.'
                    }, {
                        title: 'คุกกี้ที่จำเป็นอย่างเคร่งครัด',
                        description: 'คุกกี้เหล่านี้จำเป็นสำหรับการทำงานที่เหมาะสมของเว็บไซต์ของฉัน หากไม่มีคุกกี้เหล่านี้ เว็บไซต์จะทำงานไม่ถูกต้อง',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'คุกกี้ประสิทธิภาพและการวิเคราะห์',
                        description: 'คุกกี้เหล่านี้ช่วยให้เว็บไซต์จดจำตัวเลือกที่คุณได้ทำไว้ในอดีต',
                        toggle: {
                            value: 'analytics',     // there are no default categories => you specify them
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '^_ga',
                                col2: 'bizpotential.com',
                                col3: '2 years',
                                col4: 'This cookie is a Google Analytics persistent cookie which is used to distinguish unique users.',
                                col5: 'คุกกี้ในส่วนวิเคราะห์',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'bizpotential.com',
                                col3: '1 day',
                                col4: 'This cookie is a Google Analytics persistent cookie which is used to distinguish unique users.',
                            }
                        ]
                    }, {
                        title: 'คุกกี้โฆษณาและกำหนดเป้าหมาย',
                        description: 'คุกกี้เหล่านี้รวบรวมข้อมูลเกี่ยวกับวิธีที่คุณใช้เว็บไซต์ หน้าที่คุณเข้าชม และลิงก์ใดที่คุณคลิก ข้อมูลทั้งหมดจะไม่เปิดเผยชื่อและไม่สามารถใช้เพื่อระบุตัวตนของคุณได้',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }
                ]
            }
        }
    }

});
