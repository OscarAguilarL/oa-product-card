import * as React from 'react';
import renderer from 'react-test-renderer';

import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('Pruebas en el componente ProductImage', () => {
  test('debe de mostrar la imágen enviada por argumento', () => {
    const wrapper = renderer.create(
      <>
        <ProductImage img="https://hola.jpg" alt="imagen de prueba" />
      </>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
