const { PROPERTY_TYPE_RESIDENTIAL_APARTMENT, PROPERTY_TYPE_PG_CO_LIVING, PROPERTY_TYPE_INDEPENDENT_HOUSE_VILLA, PROPERTY_TYPE_RESIDENTIAL_LAND, PROPERTY_TYPE_FARM_HOUSE, PROPERTY_TYPE_READY_TO_MOVE_OFFICE, PROPERTY_TYPE_COWORKING, PROPERTY_TYPE_SHOPS_AND_RETAIL, PROPERTY_TYPE_AGRICULTURAL_FARM_LAND, PROPERTY_TYPE_INDUSTRIAL_LAND, PROPERTY_TYPE_PLOTS, PROPERTY_TYPE_OTHERS, PROPERTY_TYPE_COLD_STORAGE, FORM_KEY_ROOMS, FORM_KEY_FURNISHING_STATUS, FORM_KEY_AVAILABLE_FOR, FORM_KEY_RESIDENTIAL_FURNISHING_AVAILABLE, FORM_KEY_RESIDENTIAL_SITUATED_IN, FORM_KEY_SHOP_SITUATED_IN, FORM_KEY_SHOP_BUSINESS_TYPE, FORM_KEY_SEATS, FORM_KEY_PROPERTY_TYPE, FORM_KEY_FACILITIES, FORM_KEY_SHOP_FACILITIES, PROPERTY_TYPE_WARE_HOUSE, FORM_KEY_BATHROOMS, FORM_KEY_BALCONY } = require("../common.constants");

exports.data = {
    [FORM_KEY_PROPERTY_TYPE]: {
        placeholder: "Property Types",
        keys: [PROPERTY_TYPE_RESIDENTIAL_APARTMENT, PROPERTY_TYPE_PG_CO_LIVING, PROPERTY_TYPE_INDEPENDENT_HOUSE_VILLA, PROPERTY_TYPE_RESIDENTIAL_LAND, PROPERTY_TYPE_FARM_HOUSE, PROPERTY_TYPE_READY_TO_MOVE_OFFICE, PROPERTY_TYPE_COWORKING, PROPERTY_TYPE_SHOPS_AND_RETAIL, PROPERTY_TYPE_AGRICULTURAL_FARM_LAND, PROPERTY_TYPE_INDUSTRIAL_LAND, PROPERTY_TYPE_PLOTS, PROPERTY_TYPE_COLD_STORAGE, PROPERTY_TYPE_WARE_HOUSE, PROPERTY_TYPE_OTHERS],
        values: ["Residential Apartement", "PG/Co-Living", "Independent House/Villa", "Residential Land", "Farm House", "Ready to move office", "Coworking", "Shops & Retail", "Agricultural/Farm Land", "Industrial Land", "Plots", "Cold Storage", "Ware House", "Others"]
    },
    [FORM_KEY_ROOMS]: {
        placeholder: "Number of bedrooms",
        values: ["+1RK/BHK", "+2BHK", "+3BHK", "+4BHK", "+5BHK", "+6BHK", "+7BHK"]
    },
    [FORM_KEY_BATHROOMS]: {
        placeholder: "Number of bathrooms",
        values: [0, 1, 2, 3, 4, 5, 6, 7]
    },
    [FORM_KEY_BALCONY]: {
        placeholder: "Number of balconies",
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    },
    [FORM_KEY_FURNISHING_STATUS]: {
        placeholder: "Furnishing Status",
        values: ["Semifurnished", "Furnished", "Unfurnished"]
    },
    [FORM_KEY_AVAILABLE_FOR]: {
        placeholder: "Available for",
        values: ["Boys", "Girls", "Family"]
    },
    [FORM_KEY_RESIDENTIAL_FURNISHING_AVAILABLE]: {
        placeholder: "Furnishing Available",
        values: ["Kitchen Slab/Sink", "Switches", "Lights", "Fans", "Taps", "Geyser", "Wardrobe", "Kitchen Cabinet", "Bathroom Mirrors", "Chimney", "TV", "Fridge", "Washing Machine", "Sofa", "Cots", "Mattress", "Gas Stoves", "AC"]
    },
    [FORM_KEY_FACILITIES]: {
        placeholder: "Facilities",
        values: ["Furnished", "Central Air", "OxygenDuct", "UPS", "Fire Store", "Sprinklers", "Fire hose", "No Reception area", "No conference room", "No Fire extinguisher"]
    },
    [FORM_KEY_SHOP_FACILITIES]: {
        placeholder: "Facilities",
        values: ["Sprinklers", "Fire extinguisher", "No Fire hose", "No Fire Sensors", "No conference room"]
    },
    [FORM_KEY_SHOP_FACILITIES]: {
        placeholder: "Facilities",
        values: ["Lift(s)", "CCTV Surveillance", "Reserved Parking"]
    },
    [FORM_KEY_RESIDENTIAL_SITUATED_IN]: {
        placeholder: "Situated In",
        values: ["Near by Market/High Street", "Near by Mall", "Near by Retail Complex/Building"]
    },



    [FORM_KEY_SHOP_SITUATED_IN]: {
        placeholder: "Situated In",
        values: ["Market/High Street", "Mall", "Retail Complex/Building", "Residential Area"]
    },
    [FORM_KEY_SHOP_BUSINESS_TYPE]: {
        placeholder: "Business Type",
        values: ["Jewellery", "Grocery", "Clothes", "Mobile", "Footwear", "Stationary", "Clinic", "Chemist", "Gym"]
    },


    [FORM_KEY_SEATS]: {
        placeholder: "Number of seats",
        values: [
            {
                from: 0,
                to: 1
            },
            {
                from: 2,
                to: 5
            },
            {
                from: 6,
                to: 10
            },
            {
                from: 11,
                to: 20
            },
            {
                from: 21,
                to: 50
            },
            {
                from: 51,
                to: 100
            },
            {
                from: 101,
                to: 500
            },
            {
                from: 500,
                to: undefined
            }
        ]
    }
}