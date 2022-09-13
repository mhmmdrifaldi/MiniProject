import axios from 'axios'
import config from '../config/config'

const list = async()=>{
    try {
        const result = await axios.get(`${config.myDomain}/app/category`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const create = async(payload)=>{
    try{
        const result = await axios.post(`${config.myDomain}/app/category`,payload)
        return result
    }
    catch(error){
        return await error.message
    }
}
const update = async(data)=>{
    try {
        const result = await axios.put(`${config.myDomain}/app/category/${data.cate_id}`,data)
        return result
    } catch (error) {
        return await error.message
    }
}
const deleted = async(id) => {
    try{
        const result = await axios.delete(`${config.myDomain}/app/category/${id}`)
        return result
    }
    catch(error){
        return await error.message
    }
}
const findOne = async(id)=>{
    try {
        const result = await axios.get(`${config.myDomain}/app/category/${id}`)
        return result.data
    } catch (error) {
        return error
    }
}
export default {list, create, update, deleted, findOne}

