import { Form, redirect, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';


export const action = async ({ request }) => {
  
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

try {
  const response = await axios.post(newsletterUrl, data);
  toast.success(response.data.msg);
  return redirect('/');
} catch (error) {
  console.log(error);
  toast.error(error?.response?.data?.msg);
  return error;
  
  
}
  
}

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Form className="form" method="POST">
      <h4 style={{textAlign: 'center', marginBottom: '2rem'}}>our newsletter</h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">name</label>
        <input type="text" name="name" id="name" required className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">lastName</label>
        <input type="text" name="lastName" id="lastName" required className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">email</label>
        <input type="email" name="email" id="email" required className="form-input" />
      </div>
      <button type="submit" className="btn btn-block" style={{marginTop: '0.5rem'}} disabled={isSubmitting}>
        {isSubmitting? 'submitting' : 'submit'}
      </button>
    </Form>
  )
}
export default Newsletter