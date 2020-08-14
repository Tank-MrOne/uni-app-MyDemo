import config from './config.js'
export default (url , data={},method='GET')=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			// url:url,  // H5
			url : config.host + url,
			data,
			method,
			success:(res)=> {
				resolve(res.data)
			},
			fail:(err)=>{
				reject(err)
			}
		})
	})
}