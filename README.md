# OAL - Product Card

Este es un paquete de pruebas de despliegue en NPM

### Oscar Aguilar

## Ejemplo

```javascript
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'oa-product-card';
```

```javascript
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ reset, increaseBy, isMaxCountReached, maxCount, counter }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
