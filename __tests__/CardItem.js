import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import CardItem from '../src/CardItem';

const defaultProps = {
    id: 1,
    name: 'Габи',
    url: 'https://petstory.ru/resize/800x800x80/upload/images/articles/breeds/abissinskaya-koshka/abisin_cat_3.jpg',
    breed: 'Абиссинская кошка',
    description: 'Эти кошки становятся похожими на пантеру, когда начинают играть или чем-то занимаются.',
    age: '5 месяцев',
    randomFact: 'Cамый тяжелый когда-либо зарегистрированный кот весил около 20 кг!',
    navigateToItemDetail: jest.fn(),
};

describe('CardItem component', () => {
    let component;

    beforeEach(() => {
        component = shallow(<CardItem {...defaultProps} />);
    });

    it('renders correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('calls prop navigateToItemDetail when Button clicked', () => {
        component
            .find({
                testID: 'catInfo',
            })
            .simulate('press');

        expect(defaultProps.navigateToItemDetail).toHaveBeenCalled();
    });
});


// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
//
// it('renders correctly', () => {
//     renderer.create(<CardItem />);
// });
