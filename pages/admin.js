import {useContext, useState, useEffect} from 'react';
import {useRouter} from 'next/router';

import {Context} from '../store/context';
import AdminForm from '../components/AdminForm';

function AdminPage() {
  const [productToEdit, setProductToEdit] = useState(null);  
  const ctx = useContext(Context);
  const router = useRouter();


  useEffect(() => {
    if (Object.keys(router.query).length > 0) {
      // console.log('Admin router', router.query);
      const {productId, productCategory, productSubcategory, productTitle, productPrice1, productPrice2, productPrice3, productPrice4, productDescription} = router.query;
      setProductToEdit({
        id: productId,
        category: productCategory,
        subcategory: productSubcategory,
        title: productTitle,
        price1: productPrice1,
        price2: productPrice2,
        price3: productPrice3,
        price4: productPrice4,
        description: productDescription
      });
    } 
  }, [router.query]);

  // useEffect(() => {
  //   if (router.query.id) {

  //   }
  // }, []);

  if (!ctx.admin) {
    router.replace('/');
  } else {
    return (
      // <div>
      //   <form>
      //     <div>
      //     <select 
      //       name="category" 
      //       id="selcategory"
      //       onchange="selectCategory(this.id, 'selcategory2');"
      //     >
      //       <option value="">-- Pasirink Produktą --</option>
      //       <option value="rpriemones">Rašymo Priemonės</option>
      //       <option value="rveliavos">Reklaminės Vėliavos</option>
      //       <option value="spauda">Spaudos Darbai</option>
      //       <option value="puodeliai">Puodeliai</option>
      //       <option value="atsvaitai">Atšvaitai</option>
      //       <option value="kiti">Kiti Gaminiai</option>
      //     </select>

      //     <label for="title">Title</label>
      //     <input type="text" name="title"/>
      //     </div>
      //     <div>
      //   <label for="imageUrl">Images</label>
      //   <input 
      //     type="file" 
      //     name="images"
      //     multiple 
      //     id="image" 
      //   />
      // </div>
      //   </form>
      // </div> 


      <AdminForm product={productToEdit} />
    );
  } 
};

export default AdminPage;