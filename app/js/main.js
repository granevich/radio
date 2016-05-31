/**
 * Created by granevich on 06.05.2016.
 */

// =======================================================disable_scroll
document.onmousewheel=document.onwheel=function(){
    return false;
};
document.addEventListener("MozMousePixelScroll",function(){return false},false);
document.onkeydown=function(e) {
    if (e.keyCode>=33&&e.keyCode<=40) return false;
};
// =======================================================disable_scroll
var UR1link = "http://nrcu.gov.ua:8000/ur1-mp3";
var UR2link = "http://nrcu.gov.ua:8000/ur2-mp3";
var UR3link = "http://nrcu.gov.ua:8000/ur3-mp3";

$(document).ready(function(){
    // ==========================================================================UR1
//================================================================ DEFAULT

    $('.qualityUR1').text('192 kbit/s');

    $("#jquery_jplayer_UR1").jPlayer({
        play: function() {
            $(this).jPlayer("pauseOthers"); // pause all players except this one.

        },

        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Bubble",
                mp3:UR1link
            });

        },

        swfPath: "/js",
        supplied: " ogg, mp3, m4a",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        cssSelectorAncestor: " ",
        cssSelector: {
            play: "#play1",
            pause: "#pause1",
            mute: "#mute",
            unmute: "#unmute"

        }
    });
//================================================================ END DEFAULT

//=================================================================== 56Kbit
    $('.UR1kbit56').click(function () {
        $('.qualityUR1').text('56 kbit/s');

        $("#jquery_jplayer_UR1").jPlayer("destroy");
        UR1link = "http://nrcu.gov.ua:8000/ur1-mp3-l";
        $("#jquery_jplayer_UR1").jPlayer({
            play: function() {
                $(this).jPlayer("pauseOthers"); // pause all players except this one.
            },
            ready: function () {
                $(this).jPlayer("setMedia", {
                    title: "Bubble",
                    mp3:UR1link
                });

            },

            swfPath: "/js",
            supplied: " ogg, mp3",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            cssSelectorAncestor: " ",
            cssSelector: {
                play: "#play1",
                pause: "#pause1",
                mute: "#mute",
                unmute: "#unmute"

            }
        });
        console.log(UR1link)

    });

//=================================================================== END 56Kbit
// =================================================================== 192Kbit



    $('.UR1kbit192').click(function () {
        $('.qualityUR1').text('192 kbit/s');
        $("#jquery_jplayer_UR1").jPlayer("destroy");
        UR1link = "http://nrcu.gov.ua:8000/ur1-mp3";

        $("#jquery_jplayer_UR1").jPlayer({
            play: function() {
                $(this).jPlayer("pauseOthers"); // pause all players except this one.
            },
            ready: function () {
                $(this).jPlayer("setMedia", {
                    title: "Bubble",
                    mp3:UR1link
                });

            },

            swfPath: "/js",
            supplied: " ogg, mp3",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            cssSelectorAncestor: " ",
            cssSelector: {
                play: "#play1",
                pause: "#pause1",
                mute: "#mute",
                unmute: "#unmute"

            }
        });
        console.log(UR1link)

    });
// ===================================================================  END 192Kbit
// ===================================================================  END 128Kbit
    $('.UR1kbit128').click(function () {
        $('.qualityUR1').text('128 kbit/s');
        $("#jquery_jplayer_UR1").jPlayer("destroy");
        UR1link = "http://nrcu.gov.ua:8000/ur1-mp3-m";

        $("#jquery_jplayer_UR1").jPlayer({
            play: function() {
                $(this).jPlayer("pauseOthers"); // pause all players except this one.
            },
            ready: function () {
                $(this).jPlayer("setMedia", {
                    title: "Bubble",
                    mp3:UR1link
                });

            },

            swfPath: "/js",
            supplied: " ogg, mp3",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            cssSelectorAncestor: " ",
            cssSelector: {
                play: "#play1",
                pause: "#pause1",
                mute: "#mute",
                unmute: "#unmute"

            }
        });
        console.log(UR1link)

    });

    // =============================================================================================



    $('.qualityUR2').text('192 kbit/s');

    $("#jquery_jplayer_UR2").jPlayer({
        play: function() {
            $(this).jPlayer("pauseOthers"); // pause all players except this one.
        },
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Bubble",
                mp3:UR2link
            });

        },

        swfPath: "/js",
        supplied: " ogg, mp3, m4a",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        cssSelectorAncestor: " ",
        cssSelector: {
            play: "#play2",
            pause: "#pause2",
            mute: "#mute",
            unmute: "#unmute"

        }
    });
//================================================================ END DEFAULT

//=================================================================== 56Kbit
    $('.UR2kbit56').click(function () {
        $('.qualityUR2').text('56 kbit/s');

        $("#jquery_jplayer_UR2").jPlayer("destroy");
        UR2link = "http://nrcu.gov.ua:8000/ur2-mp3-l";
        $("#jquery_jplayer_UR2").jPlayer({
            play: function() {
                $(this).jPlayer("pauseOthers"); // pause all players except this one.
            },
            ready: function () {
                $(this).jPlayer("setMedia", {
                    title: "Bubble",
                    mp3:UR2link
                });

            },

            swfPath: "/js",
            supplied: " ogg, mp3",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            cssSelectorAncestor: " ",
            cssSelector: {
                play: "#play2",
                pause: "#pause2",
                mute: "#mute",
                unmute: "#unmute"

            }
        });
        console.log(UR1link)

    });

//=================================================================== END 56Kbit
// =================================================================== 192Kbit



    $('.UR2kbit192').click(function () {
        $('.qualityUR2').text('192 kbit/s');
        $("#jquery_jplayer_UR2").jPlayer("destroy");
        UR2link = "http://nrcu.gov.ua:8000/ur2-mp3-m";

        $("#jquery_jplayer_UR2").jPlayer({
            play: function() {
                $(this).jPlayer("pauseOthers"); // pause all players except this one.
            },
            ready: function () {
                $(this).jPlayer("setMedia", {
                    title: "Bubble",
                    mp3:UR2link
                });

            },

            swfPath: "/js",
            supplied: " ogg, mp3",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            cssSelectorAncestor: " ",
            cssSelector: {
                play: "#play2",
                pause: "#pause2",
                mute: "#mute",
                unmute: "#unmute"

            }
        });


    });
// ===================================================================  END 192Kbit
// ===================================================================  END 128Kbit
    $('.UR2kbit128').click(function () {
        $('.qualityUR2').text('128 kbit/s');
        $("#jquery_jplayer_UR2").jPlayer("destroy");
        UR2link = "http://nrcu.gov.ua:8000/ur2-mp3-m";

        $("#jquery_jplayer_UR2").jPlayer({
            play: function() {
                $(this).jPlayer("pauseOthers"); // pause all players except this one.
            },
            ready: function () {
                $(this).jPlayer("setMedia", {
                    title: "Bubble",
                    mp3:UR2link
                });

            },

            swfPath: "/js",
            supplied: " ogg, mp3",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            cssSelectorAncestor: " ",
            cssSelector: {
                play: "#play2",
                pause: "#pause2",
                mute: "#mute",
                unmute: "#unmute"

            }
        });
        console.log(UR1link)

    });
// =============================================================================================



    $('.qualityUR3').text('192 kbit/s');

    $("#jquery_jplayer_UR3").jPlayer({
        play: function() {
            $(this).jPlayer("pauseOthers"); // pause all players except this one.
        },
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Bubble",
                mp3:UR3link
            });

        },

        swfPath: "/js",
        supplied: " ogg, mp3, m4a",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        cssSelectorAncestor: " ",
        cssSelector: {
            play: "#play3",
            pause: "#pause3",
            mute: "#mute",
            unmute: "#unmute"

        }
    });
//================================================================ END DEFAULT

//=================================================================== 56Kbit
    $('.UR3kbit56').click(function () {
        $('.qualityUR3').text('56 kbit/s');

        $("#jquery_jplayer_UR3").jPlayer("destroy");
        UR3link = "http://nrcu.gov.ua:8000/ur3-mp3-l";
        $("#jquery_jplayer_UR3").jPlayer({
            play: function() {
                $(this).jPlayer("pauseOthers"); // pause all players except this one.
            },
            ready: function () {
                $(this).jPlayer("setMedia", {
                    title: "Bubble",
                    mp3:UR3link
                });

            },

            swfPath: "/js",
            supplied: " ogg, mp3",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            cssSelectorAncestor: " ",
            cssSelector: {
                play: "#play3",
                pause: "#pause3",
                mute: "#mute",
                unmute: "#unmute"

            }
        });
        console.log(UR1link)

    });

//=================================================================== END 56Kbit
// =================================================================== 192Kbit



    $('.UR3kbit192').click(function () {
        $('.qualityUR2').text('192 kbit/s');
        $("#jquery_jplayer_UR3").jPlayer("destroy");
        UR3link = "http://nrcu.gov.ua:8000/ur2-mp3-m";

        $("#jquery_jplayer_UR3").jPlayer({
            play: function() {
                $(this).jPlayer("pauseOthers"); // pause all players except this one.
            },
            ready: function () {
                $(this).jPlayer("setMedia", {
                    title: "Bubble",
                    mp3:UR3link
                });

            },

            swfPath: "/js",
            supplied: " ogg, mp3",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            cssSelectorAncestor: " ",
            cssSelector: {
                play: "#play3",
                pause: "#pause3",
                mute: "#mute",
                unmute: "#unmute"

            }
        });
        console.log(UR1link)

    });
// ===================================================================  END 192Kbit
// ===================================================================  END 128Kbit
    $('.UR3kbit128').click(function () {
        $('.qualityUR3').text('128 kbit/s');
        $("#jquery_jplayer_UR3").jPlayer("destroy");
        UR3link = "http://nrcu.gov.ua:8000/ur2-mp3-m";

        $("#jquery_jplayer_UR3").jPlayer({
            play: function() {
                $(this).jPlayer("pauseOthers"); // pause all players except this one.
            },
            ready: function () {
                $(this).jPlayer("setMedia", {
                    title: "Bubble",
                    mp3:UR3link
                });

            },

            swfPath: "/js",
            supplied: " ogg, mp3",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            cssSelectorAncestor: " ",
            cssSelector: {
                play: "#play3",
                pause: "#pause3",
                mute: "#mute",
                unmute: "#unmute"

            }
        });


    });


    });



