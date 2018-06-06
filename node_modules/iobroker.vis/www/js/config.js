var visConfig = {
    "widgetSets": [
        {
            "name": "bars",
            "depends": []
        },
        "basic",
        "canvas-gauges",
        "colorpicker",
        {
            "name": "fancyswitch",
            "depends": [
                "basic"
            ]
        },
        {
            "name": "google-fonts",
            "always": true
        },
        {
            "name": "history",
            "depends": []
        },
        "hqwidgets",
        "jqplot",
        {
            "name": "jqui-mfd",
            "depends": [
                "basic",
                "jqui"
            ]
        },
        {
            "name": "jqui",
            "depends": [
                "basic"
            ]
        },
        {
            "name": "justgage",
            "depends": []
        },
        {
            "name": "keyboard",
            "depends": []
        },
        {
            "name": "lcars",
            "depends": [
                "basic"
            ]
        },
        "map",
        {
            "name": "metro",
            "depends": [
                "jqui-mfd",
                "basic"
            ]
        },
        {
            "name": "players",
            "depends": []
        },
        "plumb",
        "rgraph",
        "swipe",
        "tabs",
        "timeandweather",
        "weather"
    ]
};
if (typeof exports !== 'undefined') {
    exports.config = visConfig;
} else {
    visConfig.language = window.navigator.userLanguage || window.navigator.language;
}
