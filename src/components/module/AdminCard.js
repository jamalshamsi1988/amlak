"use client"
import styles from '@/module/AdminCard.module.css'
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

const AdminCard = ({data:{_id,title,description,price,location}}) => {
const router=useRouter();
  const publishHandler=async()=>{
    const res= await fetch(`/api/profile/publish/${_id}`,{method:"PATCH"});
    const result= await res.json();
    if(result.message ){
      toast.success(result.message)
      router.refresh()

    } 
  }
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.properties}>
        <span>{location}</span>
        <span>{price}</span>
      </div>
    <button onClick={publishHandler}>انتشار</button>
    <Toaster/>
    </div>
  )
}

export default AdminCard