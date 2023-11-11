import nc from "next-connect";
import cors from "cors";

const handler = nc()
    // use connect based middleware
    .use(cors())
    .get(async (req, res) => {
        const now = new Date();
        const unixTimestamp = Math.floor(now.getTime() / 1000);

        const response = await fetch(`https://api.macro.sbercrm.com/estate/group/getComplexes?domain=geostroi.company&token=V6Krvyzrbe8S5DzTll6vln92m8DbrmyybQbg&time=${unixTimestamp}`);
        return res.json('123');
    });

export default handler;