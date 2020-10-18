import moment from 'moment';

const vessels = [
    {
        "name": "Black Pearl",
        "timeIntervalsInTortuga":
        [
            {
                "start": 1602852074391,
                "end": 1602852084391
            },
            {
                "start": 1602852174391,
                "end": 1602853174391
            }
        ]
    },
    {
        "name": "Jack Sparrow",
        "timeIntervalsInTortuga":
            [
                {
                    "start": 1602852174391,
                    "end": 1602853074391

                }
            ]
     },
    {
        "name": "Tarshih",
        "timeIntervalsInTortuga":
            [
                {
                    "start": 1602612616730,
                    "end": 1602717516730
                },
                {
                    "start": 1602852074391,
                    "end": 1602852084391
                }
             ]
    }];

const computeTimeInPort = () => {

    return vessels.map(currVessel => {
        var obj = {};
        obj["name"] = currVessel.name;
        obj["duration"] = computeTimeInPortByVessel(currVessel);
        return obj;
    });
}

const computeTimeInPortByVessel = (vessel) => {
    return vessel.timeIntervalsInTortuga.reduce((prev, current) => {
        return prev + durationBetweenDates(current.start, current.end);
    }, 0);
};

const durationBetweenDates = (from, to) => {
    return moment.duration(moment(to).diff(moment(from))).asMilliseconds();
};

export default computeTimeInPort;