import { mutationField } from 'nexus';
import { Context } from '../context'

// export const logout = mutationField('logout', {
//   type: 'String',
//   args: {},
//   async resolve(_root, context:Context) {
//     context.res.clearCookie('jwt');
//   },
// });

export const logout = mutationField("logout", {
  type: 'Boolean',
  async resolve(_root, context:Context){
    console.log("here")
    context.res.clearCookie("jwt")
  }
})
