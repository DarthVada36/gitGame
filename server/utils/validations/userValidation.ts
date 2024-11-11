// UserValidator.ts
import { check, param } from 'express-validator';


export const validateCreateUser = [
  check('name')
    .notEmpty().withMessage('El nombre es requerido'),

  check('email')
    .isEmail().withMessage('Debe ser un correo electrónico válido')
    .notEmpty().withMessage('El correo es requerido'),

  check('birth_date')
    .isISO8601().withMessage('Debe ser una fecha válida en formato ISO')
    .notEmpty().withMessage('La fecha de nacimiento es requerida'),

  check('password')
    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
    .notEmpty().withMessage('La contraseña es requerida'),

  check('bio')
    .optional()
    .isLength({ max: 200 }).withMessage('La biografía no debe superar los 200 caracteres'),

  check('avatar')
    .optional()
    .custom((value) => {
      // Si avatar es una ruta local, puedes saltar la validación de URL
      if (typeof value === 'string' && value.startsWith('avatar')) {
        return true;
      }
      // Si no es local, valida que sea una URL
      return value ? check(value).isURL().withMessage('El avatar debe ser una URL válida') : true;
    }),
];


export const validateUpdateUser = [
  check('name')
    .optional()
    .notEmpty().withMessage('El nombre no debe estar vacío'),
  check('rol')
  .optional()
  .notEmpty().withMessage('El rol no debe estar vacío'),
  check('email')
    .optional()
    .isEmail().withMessage('Debe ser un correo electrónico válido'),
  
];

// UserValidator.ts
export const validateDeleteUser = [
  param('id').isInt().withMessage('El ID del usuario debe ser un número entero válido')
];

