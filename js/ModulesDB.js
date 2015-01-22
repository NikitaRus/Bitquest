/**
 * Created by N1 on 5/4/14.
 */
MaterialsDB = [
    {
        Name: "Gates",
        Price: 6,
        Quantity: 1
    },
    {
        Name: "Connectors",
        Price: 5,
        Quantity: 1
    },

    {
        Name: "Chips",
        Price: 30,
        Quantity: 1
    },

    {
        Name: "Bugs",
        Price: 35,
        Quantity: 1
    },

    {
        Name: "Codes",
        Price: 4,
        Quantity: 1
    },

    {
        Name: "Scripts",
        Price: 5,
        Quantity: 1
    }
];

Module = {
    Power: {
        Reserve: {
            Name: "Reserve",
            Price: 500,
            Recharge: 0,
            Power: 100,
            CPUConsumption: 0,
            ShieldConsumption: 0
        },

        AlternativeCurrent: {
            Name: "AlternativeCurrent",
            Price: 780,
            Recharge: 0.10,
            Power: 0,
            CPUConsumption: 0,
            ShieldConsumption: 0
        },

        Capacitors: {
            Name: "Capacitors",
            Price: 800,
            Recharge: 0,
            Power: 0,
            CPUConsumption: 0.10,
            ShieldConsumption: 0.10
        }
    },

    CPU: {
        Arithmetic: {
            Name: "Arithmetic",
            Price: 1400,
            CPUBoost: 0.10
        }
    },

    Virus: {
        Exploit: {
            Price: 760,
            Name: "Exploit",
            VirusBoost: 0.10,
            VirusTimer: 0

        },

        PortMapping: {
            Price: 480,
            Name: "PortMapping",
            VirusBoost: 0,
            VirusTimer: 0.10
        }
    },

    Shield: {
        Blacklist: {
            Price: 600,
            Name: "Blacklist",
            VirusAvoidance: 0.10,
            StabilityBoost: 0,
            VirusResistance: 0
        },

        Repairer: {
            Price: 750,
            Name: "Repairers",
            VirusAvoidance: 0,
            StabilityBoost: 0.10,
            VirusResistance: 0
        },

        SystemPatch: {
            Price: 900,
            Name: "SystemPatch",
            VirusAvoidance: 0,
            StabilityBoost: 0,
            VirusResistance: 3.50
        }
    }
};