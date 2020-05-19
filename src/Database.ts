import mongoose from "mongoose";
import logger from "./Logger";
import User from "./models/User";
import Role from "./models/Role";
import { RoleType, UserStatus } from "./util/AppConstant";
import bcrypt from "bcryptjs";
export class Database {
  static init() {
    Database.cleanAll();
    if (
      Role.count({ name: "user" }, (err, count) => {
        if (!count) {
          new Role({ name: "super", type: RoleType.SUPER })
            .save()
            .then((role) => {
              new User({
                fname: "super",
                lname: "super",
                email: "super@super",
                password: bcrypt.hashSync("super", 12),
                status: UserStatus.ACTIVE,
                roleId: role,
              }).save();
            });
          new Role({ name: "admin", type: RoleType.ADMIN }).save();
          new Role({ name: "manager", type: RoleType.MANAGER }).save();
          new Role({ name: "user", type: RoleType.USER }).save();
          logger.info("Database init");
        }
      })
    ) {
    }
  }

  static cleanAll() {
    User.collection.drop();
    mongoose.connection.db.dropDatabase(() => {
      logger.info("Database removed");
    });
  }
}
