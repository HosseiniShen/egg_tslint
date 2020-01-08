import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this; 
    console.log(56) 
    console.log(456)
    console.log(568)
    console.log(789) 
    ctx.body = await ctx.service.test.sayHi('egg')
  }
}
