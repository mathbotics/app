import { mutationField } from 'nexus';
import { Context } from '../context'

// export const logout = mutationField('logout', {
//   type: 'String',
//   args: {},
//   async resolve(_root, context:Context) {
//     context.res.clearCookie('jwt');
//   },
// });

export const logOut = mutationField("logOut", {
  type: 'Boolean',
  args: {},
  async resolve(_root, {}, context:Context){
    // console.log(context.res.cookie());
    context.res.clearCookie('jwt');
    return true;
  }
})
