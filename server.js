const axios = require('axios');
const express = require('express');
const cors = require('cors')
const md5 = require("md5");
const path = require("path");

const app = express();
const domain = 'geostroi.company';
const app_secret = 'V6Krvyzrbe8S5DzTll6vln92m8DbrmyybQbg';
app.use(cors())

const port = process.env.PORT || 5000
app.use("/api/getComplexes", async (req, res) => {
    const timestamp = Date.now();
    const token = md5(domain + timestamp + app_secret);
    try {
        const response = await axios.get(`https://api.macro.sbercrm.com/estate/group/getComplexes?domain=${domain}&time=${timestamp}&token=${token}`);
        res.send(response.data);
    } catch (e) {
        console.log(e)
    }
});

app.use("/api/getComplex/:id", async (req, res) => {
    const id = req.params.id
    const timestamp = Date.now();
    const token = md5(domain + timestamp + app_secret);
    try {
        const response = await axios.get(`https://api.macro.sbercrm.com/estate/get?domain=${domain}&time=${timestamp}&token=${token}&type=living&parent_ids=${id}`);
        res.send(response.data);
    } catch (e) {
        console.log(e)
    }
});


app.use("/api/getFacades", async (req, res) => {
    const timestamp = Date.now();
    const token = md5(domain + timestamp + app_secret);
    try {
        const response = await axios.get(`https://api.macro.sbercrm.com/estate/group/getFacades?domain=${domain}&time=${timestamp}&token=${token}`);
        console.log(response.data)
        res.send(response.data);
    } catch (e) {
        console.log(e)
    }
});

app.use('/', express.static(path.join(__dirname, 'out')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'out', 'index.html'))
})

app.listen(port, () => {
    console.log(`Proxy server listening on port ${port}`);
});