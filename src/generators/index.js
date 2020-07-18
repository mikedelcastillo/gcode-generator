// All in mm
module.exports = {
    "side-pass": {
        params: {
            origin: {
                type: "dropdown",
                options: {
                    negative: "Negative",
                    center: "Center",
                    positive: "Positive",
                },
                default: "negative",
            },
            direction: {
                type: "dropdown",
            },
            feedrate: {
                type: "number",
                min: 10,
                max: 10000,
            },
            passes: {
                type: "number",
                min: 1,
                max: 100,
            },
            stepOver: {
                type:"number",
                min: 0.1,
                max: 20,
            },
            length: {
                type: "number",
                min: 0,
                max: 100000,
            },
        },
        generate(params){

        },
    },
}