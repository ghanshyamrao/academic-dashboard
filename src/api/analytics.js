import axios from "axios";
import MockAdapter from "axios-mock-adapter"
import { apiUrls } from "../utils/urls";

//we have 2 options here for mock data 
//1 express server to get this data.
//2 create a axios mock apapter
const analytics = new MockAdapter(axios,{delayResponse:2000})

analytics.onGet(apiUrls.GET_ANALYTICS_DATA).reply(200,{
    analyticsData:{
        totalApplicants:1200,
        verifiedApplicants:900,
        rejectedApplicants:300,
        applicationsPerProgram :[
            {program:'B.Tech',count:300},
            {program:'MBBS',count:100},
            {program:'BCA',count:200},
            {program:'BSc',count:210}
        ],
        applicationsTrends:[
            {date:'2025-01-01',count:120},
            {date:'2025-01-02',count:180},
            {date:'2025-01-03',count:260},
            {date:'2025-01-04',count:320},
            {date:'2025-01-05',count:410},
            {date:'2025-01-06',count:502},
            {date:'2025-01-07',count:690},
            {date:'2025-01-08',count:1113},
            {date:'2025-01-09',count:1100},
        ]
    },
})

export default analytics