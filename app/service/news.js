// // app/service/news.js
const Service = require('egg').Service;

class NewsService extends Service {
    async list(page = 1) {
        const {
            serverUrl,
            pageSize
        } = this.config.news;
        
        // use build-in http client to GET hacker-news api
        const idList = await this.ctx.curl(`${serverUrl}`, {
            data: {
                operation: 'activecenter',
                siteNum: '10038',
                anydoorAppId: 'PA01100000000_01_FSTD',
                anydoorSdkVersion: '2.2.4.1',
                ffAppID: '10004',
                ffDeviceID: 'pc-F8-8078-4AC2-9A55-D79631270B36',
                ffNativeVersion: '1.0',
                ffOs: 'iOS',
                ffOsVersion: '9.0',
                ffScreenSize: '414.000000%2C736.000000',
                ffTimestamp: '1510716982233'
                // orderBy: '"$key"',
                // startAt: `"${pageSize * (page - 1)}"`,
                // endAt: `"${pageSize * page - 1}"`,
            }
            // dataType: 'json',
        });

        // parallel GET detail
        // const newsList = await Promise.all(
        //     Object.keys(idList).map(key => {
        //         const url = `${serverUrl}/item/${idList[key]}.json`;
        //         return this.ctx.curl(url, {
        //             dataType: 'json'
        //         });
        //     })
        // );
        // return newsList.map(res => res.data);
        console.log();
        return idList.data;
    }
}

module.exports = NewsService;