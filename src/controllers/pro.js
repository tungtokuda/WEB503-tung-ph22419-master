import axios from "axios";
export const  getALL= async(req,res)=>{
    try{
        const {data:products}= await axios.get(`http://localhost:3001/users`);
        if(products.length===0){
            req.send({
                messenger:"danh sách sản phẩm trống"
            })
        }
        return res.status(200).json(products);
    }
    catch(erro){
        res.status(500).json({messenger:erro});
    }
}
export const getdetail= async (req,res)=>{
    try{
        const {data:products}= await axios.get(`http://localhost:3001/users/${req.params.id}`)
        if(!products){
            res.send({
                messenger:"k tìm thấy dữ liệu"
            })
        }
        return res.status(200).json(products);
    }
    catch(err){
        res.status(500).json({messenger:err});
    }

}
export const create = async (req, res) => {
    try{
        const {data:products}= await axios.post(`http://localhost:3001/users`,req.body)
        if(!products){
            res.send({
                messenger:"thêm dữ liệu"
            })
        }
        return res.json(products)
    }
    catch(erro){
        res.status(500).json({messenger:erro});
    }
}
export const remove= async (req,res)=>{
    try{
        await axios.delete(`${API_URL}${req.params.id}`)
        return res.status(200).json({
            messenger:"snar phẩm đã được xóa"
        })

    }
    catch(error){
        return res.status(500).json({
            messenger:error
        })
    }
}   
export const update= async(req,res)=>{
    try{
        const {data:product}= await axios.put(`http://localhost:3001/users/${req.params.id}`,req.body)
        if(!product){
            res.send({
                messenger:"update thành công"
            })
        }
        return res.status(200).json(product)
    }
    catch(erro){
        res.status(500).json({
            messenger:erro
        })
    }
    
}
