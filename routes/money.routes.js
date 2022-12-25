import express from 'express'
// import {auth} from "../middleware/auth.js"
import {
    getMoneybyid,
    getMoney,
    UpdateMoney,
    DeleteMoney,
    createMoney
} from '../services/service.money.js'
const router = express.Router()

router.get("/", 
// auth, 
async function (request, response) {
    if(request.query.Amount){
      request.query.Amount= +request.query.Amount
    }
    console.log(request.query)
    const money = await getMoney(request.query);
    response.send(money);
  });
  
  router.get("/:id", async function (request, response) {
    const { _id } = request.params;
    const money = await getMoneybyid(_id)
    console.log(money);
    money ? response.send(money) : response.status(404).send({ msg: "Not Found" });
  });
  
  router.post('/', async function(request, response){
    const data = request.body;
    console.log(data)
    const result = await createMoney(data);
    response.send(result)
  })
  
  router.put("/:id", async function (request, response) {
    const { id } = request.params;
    const data = request.body;
    console.log(data)
    console.log(id)
    const result = await UpdateMoney(id, data);
    console.log(result);
    result ? response.send(result) : response.status(404).send({ msg: "Not Found" });
  });
  
  router.delete("/:id", async function (request, response) {
    const { id } = request.params;
    const result = await DeleteMoney(id);
    console.log(result);
    result.deletedCount > 0 ? response.send({msg:'Money was deleted successfully'}) : response.status(404).send({ msg: "MoneyNot Found" });
  });

  export default router


