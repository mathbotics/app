
import { GraphQLBoolean } from 'graphql';
import { resolve } from 'path';
import { isContext } from 'vm';
import { Context } from '../context';

export const logOut = {
  type: GraphQLBoolean,
  args: {},
  async resolve(root, args, context: Context){
    context.res.clearCookie('jwt')
    return true;
  }
}





// export const logOut = mutationField('logOut', {
//   type: 'Boolean',
//   args: {},
//   async resolve(_root, {}, context: Context) {
//     context.res.clearCookie('jwt');
//     return true;
//   },
// });
