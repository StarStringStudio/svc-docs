var list = ["https://cdn.nlark.com/yuque/0/2023/png/34308570/1674576997038-b0619cd8-9c1e-42e3-a530-91fc4e6b16b0.png",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674577171373-69f2ec11-6033-4639-94ee-4692e6594549.png",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674577202555-c86e9fb8-7108-4568-ba5b-ee63ba7de3f2.png",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674577349922-91b7cd5e-a657-41d6-831c-3e28e52aeed2.png",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674577469138-4e714871-0f4e-4d98-9b35-12e0838fd38e.png?x-oss-process=image%2Fresize%2Cw_825%2Climit_0",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674577921467-fae3b410-5739-4873-afb6-0824d639c787.png?x-oss-process=image%2Fresize%2Cw_825%2Climit_0",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674577943237-4244a67f-162b-439f-81a2-719aaa745b15.png",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674578174886-8d2b86dd-dba4-42fd-b32c-e63d132397f4.png",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674578401598-18785e2c-f01c-4975-b17d-f454f2fcacd5.png?x-oss-process=image%2Fresize%2Cw_825%2Climit_0",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674578423503-bea20374-2f76-4255-ae6a-a0d0ef2e2cbf.png",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674578514189-cd0f4796-4195-4357-a674-0858162f4d59.png",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674578569902-17cd5853-100d-4af6-bb94-022b386e7795.png",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674578624492-e0fa4ab7-2830-4dac-883a-7867e0ff0314.png?x-oss-process=image%2Fresize%2Cw_825%2Climit_0",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674578939803-7a0536fe-7ecd-4955-9773-a4d6b197bbe0.png",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674578958642-bae1b643-c794-4001-9ab2-61e4c1bfd0cd.png?x-oss-process=image%2Fresize%2Cw_825%2Climit_0",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674579196712-15e566bc-0d33-46a6-bc2e-f4144dd30d8e.png",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674579209166-94c4af0c-58f9-478e-95fa-ef943ad5dc56.png",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674579230475-597974b3-1e55-4ee3-b7cf-841c961c0ae2.png",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674579379034-0193cbb7-feb7-4129-9697-daeb19413836.png",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674579569032-508d7590-9070-4a48-a877-935cc3f635d9.png",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674579589216-1e886b46-8203-470b-871e-b3537de9c9f6.png",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674712753637-3f93a783-fc50-4f9f-bbd4-0c68331199de.png?x-oss-process=image%2Fresize%2Cw_825%2Climit_0",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674714243833-8d18b1dc-dc19-4499-8fbf-157130c441e3.png?x-oss-process=image%2Fresize%2Cw_853%2Climit_0",
"https://cdn.nlark.com/yuque/0/2023/png/34308570/1674714271833-5ae5855d-694b-4c1d-9883-f305dec513e9.png"]
const fs = require("fs")
const axios = require("axios")
const downloadFile = (async (url, path) => {
    axios({
        method: 'get',
        url,
        responseType: 'stream'
    })
    .then(function (response) {
        response.data.pipe(fs.createWriteStream(path))
    });
});
var savePath = "./1/env/"
for (const i in list) {
    var tmp = Number(i)+1
    downloadFile(list[i],`${savePath}${tmp}.png`)
}