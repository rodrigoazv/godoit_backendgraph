import {
  Resolver,
  Mutation,
  Arg,
  Query,
  InputType,
  Field,
  Int,
} from "type-graphql";
import { ForbiddenError, ApolloError } from "apollo-server-core";
import { User } from "../models/user.entity";
import { getManager, getConnection } from "typeorm";

@InputType()
class UserInput {
  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
class UserUpdateInput {
  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  password?: string;
}

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async createUser(@Arg("options", () => UserInput) options: UserInput) {
    const UserM = await getManager().getRepository(User).create(options).save();
    return UserM;
  }

  @Mutation(() => Boolean)
  async updateUser(
    @Arg("id", () => Int) id: number,
    @Arg("userFields", () => UserUpdateInput) userFields: UserUpdateInput
  ) {
    try {
      const UserById = await getManager().getRepository(User).findOneOrFail(id);
      if (!UserById) {
        throw new ForbiddenError("User not found.");
      }
      const updateUser = await getConnection()
        .createQueryBuilder()
        .update(User)
        .set(userFields)
        .where("id = :id", { id: id })
        .execute();
      return updateUser ? true : false;
    } catch (err) {
      throw new ApolloError(err)
    }
  }

  @Mutation(() => Boolean)
  async deleteMovie(@Arg("id", () => Int) id: number) {
    await getManager().getRepository(User).delete(id);
    return true;
  }

  @Query(() => [User])
  user() {
    const UserMs = getManager().getRepository(User);
    return UserMs.find();
  }
}
