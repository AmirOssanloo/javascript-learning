import { compareSync } from 'bcryptjs';

const passwordCompareSync = (password, passwordHash) => {
  return compareSync(password, passwordHash);
};

export default passwordCompareSync;
