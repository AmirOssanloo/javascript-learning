import { hashSync, genSaltSync } from 'bcryptjs';

const hashPassword = password => {
  return hashSync(password, genSaltSync(12));
};

export default hashPassword;
