# GoodCar

GoodCar is a professional car service and appointment booking platform where users can schedule maintenance, explore services, and read automotive blogs. 


## 🚀 Live Project  
🔗 [GoodCar Live](https://good-car-atiq.web.app/)  

---

## 📌 Technologies Used  
- **Frontend**: React, React Router DOM, Tailwind CSS, DaisyUI, Styled Components, Firebase for Authentication 
- **Backend**: Node.js, Express.js, MongoDB Atlas, Axios (for API calls) 
- **Hosting:** Client hosted on Firebase, Server hosted on Vercel  
- **Payments**: Stripe Integration  
- **State Management & Utilities**: LocalForage, Match Sorter, React Helmet Async  
- **Animations & UI Enhancements**: React Awesome Reveal, Motion  
- **Blog & Service Management**: React Quill, React Responsive Masonry  
- **Notifications & Alerts**: React Toastify, React Tooltip  

---

## 🌟 Core Features  
✅ Browse car services and make appointments  
✅ Secure payment processing using Stripe  
✅ Manage personal appointments and updates  
✅ Admin panel for managing all appointments  
✅ Add, update, and delete automotive blogs  
✅ Responsive design with Tailwind CSS and DaisyUI  
✅ Authentication using Firebase  
✅ Rich text editing for blogs using React Quill  

---

## 📦 Dependencies  
Refer to [`package.json`](package.json) for a complete list of dependencies. Some key dependencies include:  
- **React & React DOM** (`^18.3.1`)  
- **React Router DOM** (`^6.28.0`)  
- **Firebase** (`^11.1.0`)  
- **Axios** (`^1.7.9`)  
- **React Quill** (`^2.0.0`)  
- **React Toastify** (`^10.0.6`)  
- **React Tooltip** (`^5.28.0`)  
- **Stripe Payment Integration** (`@stripe/react-stripe-js`, `@stripe/stripe-js`)  

---

## 🛠️ Installation & Setup  

Follow these steps to run the project locally:  

### Prerequisites  
- Install [Node.js](https://nodejs.org/) (latest LTS version recommended)  
- Install [Git](https://git-scm.com/)  

### Steps  

1. **Clone the repository**  
   ```sh
   git clone https://github.com/your-username/goodcar.git
   cd goodcar
   ```

2. **Install dependencies**  
   ```sh
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env.local` file in the root directory and add the following variables:  
   ```sh
   VITE_apiKey=your_firebase_api_key
   VITE_authDomain=your_firebase_auth_domain
   VITE_projectId=your_firebase_project_id
   VITE_storageBucket=your_firebase_storage_bucket
   VITE_messagingSenderId=your_firebase_messaging_sender_id
   VITE_appId=your_firebase_app_id
   VITE_payment_key=your_stripe_payment_key
   VITE_cloudinary_cloud_name=your_cloudinary_cloud_name
   ```

4. **Start the development server**  
   ```sh
   npm run dev
   ```

5. **Open the project in your browser**  
   ```
   http://localhost:5173
   ```

---

## 🔄 Project Routes  

| Route                  | Access  | Description                      |
|------------------------|---------|----------------------------------|
| `/`                   | Public  | Home page                         |
| `/services`           | Public  | View all car services             |
| `/service/:_id`       | Public  | View service details              |
| `/myAppointments`     | Private | Manage personal appointments      |
| `/payment`           | Private | Make payments for services        |
| `/allAppointments`    | Admin   | View and manage all appointments  |
| `/update_appointment/:_id` | Admin | Update an appointment       |
| `/add_blog`          | Admin   | Add a new automotive blog         |
| `/blogs`             | Public  | Browse all blogs                  |
| `/blog/:_id`         | Public  | View single blog details          |
| `/update_blog/:_id`  | Admin   | Edit an existing blog             |
| `/login`             | Public  | User login                        |
| `/register`          | Public  | User registration                 |
| `/update-profile`    | Private | Update user profile               |
| `/change-password`   | Private | Change account password           |
| `/forgot-password`   | Public  | Reset password request            |

---

## 🌍 Relevant Resources  
🔗 [Live Project](https://good-car-atiq.web.app/)  
📖 [Vite Documentation](https://vitejs.dev/)  
📖 [React Router Docs](https://reactrouter.com/)  
📖 [Firebase Docs](https://firebase.google.com/docs)  
📖 [Stripe Docs](https://stripe.com/docs)  

---

## 📜 License  
This project is licensed under the **MIT License**.  

🙌 Feel free to contribute and improve the project! 🚀
