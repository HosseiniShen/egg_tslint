import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this; 
    console.log(56)
    ctx.body = await ctx.service.test.sayHi('egg')
  }
}
