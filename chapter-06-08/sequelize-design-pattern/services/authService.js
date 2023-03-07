const usersRepository = require('../repositories/userRepositories');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT } = require('../lib/const');
const SALT_ROUND = 10;

class AuthService {
  static async register({ name, email, password, role }) {
    try {
      if (!name) {
        return {
          status: false,
          code_status: 400,
          message: 'name wajib diisi',
          data: {
            registered_Users: null,
          },
        };
      }

      if (!email) {
        return {
          status: false,
          code_status: 400,
          message: 'Email wajib diisi',
          data: {
            registered_Users: null,
          },
        };
      }

      if (!password) {
        return {
          status: false,
          code_status: 400,
          message: 'Password wajib diisi',
          data: {
            registered_Users: null,
          },
        };
      }

      if (!role) {
        return {
          status: false,
          code_status: 400,
          message: 'Role wajib diisi',
          data: {
            registered_Users: null,
          },
        };
      } else if (password.length < 8) {
        return {
          status: false,
          code_status: 400,
          message: 'Password minimal 8 karakter',
          data: {
            registered_Users: null,
          },
        };
      }

      const getByEmail = await usersRepository.getByEmail({ email });

      if (getByEmail) {
        return {
          status: false,
          code_status: 400,
          message: 'Email sudah terdaftar',
          data: {
            registered_Users: null,
          },
        };
      } else {
        const hashingPassword = await bycrypt.hash(password, SALT_ROUND);
        const regsiteredUsers = await usersRepository.register({
          name,
          email,
          password: hashingPassword,
          role,
        });

        return {
          status: true,
          code_status: 201,
          message: 'Users berhasil registrasi',
          data: {
            registered_Users: regsiteredUsers,
          },
        };
      }
    } catch (err) {
      return {
        status: false,
        code_status: 500,
        message: err.message,
        data: {
          registered_Users: null,
        },
      };
    }
  }

  static async login({ email, password }) {
    try {
      if (!email) {
        return {
          status: false,
          code_status: 400,
          message: 'Email wajib diisi',
          data: {
            registered_user: null,
          },
        };
      }

      if (!password) {
        return {
          status: false,
          code_status: 400,
          message: 'Password wajib diisi',
          data: {
            registered_user: null,
          },
        };
      } else if (password.length < 8) {
        return {
          status: false,
          code_status: 400,
          message: 'Password minimal 8 karakter',
          data: {
            registered_user: null,
          },
        };
      }

      const getUser = await usersRepository.getByEmail({
        email,
      });

      if (!getUser.password) {
        return {
          status: false,
          status_code: 400,
          message: 'Akun ini belum melakukan setup password.',
          data: {
            user: null,
          },
        };
      }

      if (!getUser) {
        return {
          status: false,
          code_status: 400,
          message: 'Email belum terdaftar!',
          data: {
            registered_Users: null,
          },
        };
      } else {
        const passwordMatching = await bycrypt.compare(password, getUser.password);

        if (passwordMatching) {
          const token = jwt.sign(
            {
              id: getUser.id,
              email: getUser.email,
            },
            JWT.SECRET,
            {
              expiresIn: JWT.EXPIRED,
            }
          );

          return {
            status: true,
            code_status: 200,
            message: 'Berhasil login',
            data: {
              token,
            },
          };
        } else {
          return {
            status: false,
            code_status: 400,
            message: 'Password anda salah, mohon isi ulang',
            data: {
              registered_user: null,
            },
          };
        }
      }
    } catch (err) {
      return {
        status: false,
        code_status: 500,
        message: err.message,
        data: {
          registered_Users: null,
        },
      };
    }
  }
}

module.exports = AuthService;
