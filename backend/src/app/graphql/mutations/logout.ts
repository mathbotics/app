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
  type: "User",
  async resolve(_root){
    console.log("here")
    // _root.context.clearCookie("jwt")
  }
})
