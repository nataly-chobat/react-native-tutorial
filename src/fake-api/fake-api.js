import cats from './mocked-cats';

export const getCatsData = () => new Promise(resolve => {
    setTimeout(() => resolve(cats), 250);
});

export const getCatDataById = id => new Promise(resolve => {
    setTimeout(() => {
        const cat = cats.find(cat => cat.id === id);

        resolve(cat);
    }, 250);
});