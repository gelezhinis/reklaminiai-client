import { useState, useRef, useContext, useEffect } from 'react';
import { Context } from '../store/context';

import { categories } from '../utils/categories';

import FormCard from './ui/FormCard';

import classes from './AdminForm.module.css';

// const categories = {
//   spauda: [
//     'Lankstinukai',
//     'Skrajutės',
//     'Plakatai',
//     'Brošiūros',
//     'Bloknotai',
//     'Kortelės',
//   ],
//   rpriemones: [
//     'Metaliniai Tušinukai',
//     'Plastikiniai Tušinukai',
//     'EKO Tušinukai',
//     'Komplektai',
//     'Pieštukai',
//   ],
//   apranga: ['Marškinėliai', 'Džemperiai', 'Kepurės'],
//   veliavos: ['Reklaminės Vėliavos', 'Pagrindai', 'Vėliavos'],
//   puodeliai: ['Keramikiniai Puodeliai', 'Termo Puodeliai', 'Gertuvės'],
//   juosteles: ['Kaklajuostės', 'Pakabukai', 'Apyrankės'],
//   krepsiai: ['Medžiaginiai', 'Popieriniai', 'Kuprinės'],
// };

const AdminForm = ({ product }) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const ctx = useContext(Context);

  const categoryInput = useRef();
  const subcategoryInput = useRef();
  const titleInput = useRef();
  const price1Input = useRef();
  const price2Input = useRef();
  const price3Input = useRef();
  const price4Input = useRef();
  const price5Input = useRef();
  const price6Input = useRef();
  const descriptionInput = useRef();
  const imagesInput = useRef();

  useEffect(() => {
    if (product) {
      setIsEditing(true);
      console.log('ID', product.id);
      if (product.category in categories) {
        setSelectedCategory(categories[product.category]);
      }
      categoryInput.current.value = product.category;
      // subcategoryInput.current.value = product.subcategory;
      titleInput.current.value = product.title;
      price1Input.current.value = product.price1;
      price2Input.current.value = product.price2;
      price3Input.current.value = product.price3;
      price4Input.current.value = product.price4;
      price5Input.current.value = product.price5;
      price6Input.current.value = product.price6;
      descriptionInput.current.value = product.description;
    }
  }, [product]);

  const subcategoryHandler = (event) => {
    setSelectedCategory([]);
    const category = event.target.value;
    if (category in categories) {
      setSelectedCategory(categories[category]);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const productCategory = categoryInput.current.value;
    let productSubcategory;
    // let productId;
    if (!isEditing) {
      productSubcategory =
      selectedCategory.length > 1 ? subcategoryInput.current.value : '';
    } else {
      // productId = product.id;
      productSubcategory = product.subcategory;
    }
    const productTitle = titleInput.current.value;
    const productPrice1 = price1Input.current.value;
    const productPrice2 = price2Input.current.value;
    const productPrice3 = price3Input.current.value;
    const productPrice4 = price4Input.current.value;
    const productPrice5 = price5Input.current.value;
    const productPrice6 = price6Input.current.value;
    const productDescription = descriptionInput.current.value;

    const formData = new FormData();
    {
      isEditing && formData.append('id', product.id);
    }
    formData.append('category', productCategory);
    formData.append('subcategory', productSubcategory);
    formData.append('title', productTitle);
    formData.append('price1', productPrice1);
    formData.append('price2', productPrice2);
    formData.append('price3', productPrice3);
    formData.append('price4', productPrice4);
    formData.append('price5', productPrice5);
    formData.append('price6', productPrice6);
    formData.append('description', productDescription);
    for (const file of selectedImages) {
      formData.append('images', file, file.name);
    }

    // formData.append('images', selectedImages);
    if (!isEditing) {
      fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/admin/add-product`, {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${ctx.token}`,
        },
        body: formData,
      })
        .then((result) => {
          console.log('Produktas pridėėėėėėėėtas!');
          resetFormHandler();
        })
        .catch((err) => console.log(err.message));
    } else {
      fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/admin/edit-product/`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${ctx.token}`,
        },
        body: formData,
      })
        .then((result) => {
          console.log('Produktas atnaujiiiiiiintas!');
          resetFormHandler();
          setIsEditing(false);
        })
        .catch((err) => console.log(err.message));
    }
  };

  const imageSelectHandler = (event) => {
    setSelectedImages(event.target.files);
    // for (let i = 0; i < event.target.files.length; i++) {
    //   const newImage = event.target.files[i];
    //   setSelectedImages((prevState) => [...prevState, newImage]);
    // }
  };

  const resetFormHandler = () => {
    categoryInput.current.value = '';
    if (selectedCategory.length > 1) {
      subcategoryInput.current.value = '';
    }
    titleInput.current.value = '';
    price1Input.current.value = '';
    price2Input.current.value = '';
    price3Input.current.value = '';
    price4Input.current.value = '';
    price5Input.current.value = '';
    price6Input.current.value = '';
    descriptionInput.current.value = '';
    imagesInput.current.value = '';
  };

  return (
    <FormCard style={{marginTop: '0.5rem'}}>
      <form
        method="POST"
        onSubmit={submitHandler}
        encType="multipart/form-data"
      >
        <div className={classes.control_grid}>
          <div className={classes.control}>
            <select
              name="category"
              id="selcategory"
              onChange={subcategoryHandler}
              ref={categoryInput}
            >
              <option value="">-- Pasirink Produktą --</option>
              <option value="spauda">Spaudos darbai</option>
              <option value="rpriemones">Rašymo Priemonės</option>
              <option value="apranga">Apranga</option>
              <option value="veliavos">Vėliavos</option>
              <option value="puodeliai">Puodeliai</option>
              <option value="juosteles">Juostelės</option>
              <option value="krepsiai">Krepšiai</option>
              <option value="atsvaitai">Atšvaitai</option>
              <option value="kvokai">Kurjeriniai Vokai</option>
              <option value="uzrasines">Užrašinės</option>
              <option value="stendai">Tekstiniai Stendai</option>
              <option value="kiti">Kiti</option>
            </select>
          </div>
          {selectedCategory.length > 1 && (
            <div className={classes.control}>
              <select name="subcategory" ref={subcategoryInput}>
                <option value="">-- Pasirink Produkto Kategorija --</option>
                {selectedCategory.map((sub, i) => {
                  return (
                    <option value={sub} key={i}>
                      {sub}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
          <div className={classes.control}>
            <label htmlFor="title">Pavadinimas</label>
            <input type="text" id="title" required ref={titleInput} />
          </div>
          <div className={classes.control}>
            <label htmlFor="price">Kaina</label>
            <input type="text" id="price1" required ref={price1Input} />
            <input type="text" id="price2" ref={price2Input} />
            <input type="text" id="price3" ref={price3Input} />
            <input type="text" id="price4" ref={price4Input} />
            <input type="text" id="price5" ref={price5Input} />
            <input type="text" id="price6" ref={price6Input} />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Aprašymas</label>
            <textarea
              type="text"
              id="description"
              required
              ref={descriptionInput}
              rows="3"
            ></textarea>
          </div>
          <div className={classes.image_control}>
            <label htmlFor="imageUrl">Images</label>
            <input
              type="file"
              accept="images/*"
              name="images"
              multiple
              id="images"
              onChange={imageSelectHandler}
              ref={imagesInput}
            />
          </div>
        </div>
        <div></div>
        <div className={classes.actions}>
          <button type="submit">{!isEditing ? 'Įkelti' : 'Atnaujinti'}</button>
        </div>
      </form>
    </FormCard>
  );
};

export default AdminForm;
