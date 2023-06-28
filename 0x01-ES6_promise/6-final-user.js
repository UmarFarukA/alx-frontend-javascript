import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default handleProfileSignup((firstName, lastName, fileName) => {
    signUpUser(firstName, lastName);
    uploadPhoto(fileName)
    return new Promise((resolve, reject) => {
        resolve()
    })
});