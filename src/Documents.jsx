import '../src/documents.css'
import Header from './Header'


function Documents() {
 
    return (
        <>
            <Header/>
            <div className='container_doc'>
                <div className='win_title'>
                    ДОКУМЕНТАЦИЯ
                </div>
                <div className='doc_wrapper'>
                    <img src="../src/assets/images/image11.png" alt="" className='doc_img'/>
                    <img src="../src/assets/images/image12.png" alt="" className='doc_img'/>
                    <div className='doc_wrapper_img_column'>
                        <img src="../src/assets/images/image13.png" alt="" className='doc_circle'/>
                        <img src="../src/assets/images/image14.png" alt="" className='doc_circle'/>
                    </div>
                    <p>Наша компания зарекомендовала себя на рынке молочной продукции, на данной странице представлен перечень наших наград</p>
                </div>
            </div>
        </>
    )

}

export default Documents
