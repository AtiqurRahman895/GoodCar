import { MdRateReview } from "react-icons/md";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useReactQuill from "../../Hooks/useReactQuill";


const LongDiscriptionSection = ({rawQuillValue,setRawQuillValue,long_discription,setLong_discription,word_count,setWord_count}) => {

    const {modules,handleQuillChange}= useReactQuill(setRawQuillValue,setLong_discription,setWord_count)
    
    const temporary_long_discription=`This section is where your blog truly comes to life—expand your thoughts, 
    provide rich details, and craft a compelling narrative with at least 20 words. Please note: the editor's 
    preview may not perfectly reflect the final appearance, especially for header font sizes. To see how the 
    actual content will appear, check outside the editor preview for the most accurate representation.`


    return (
        <section className="pb-10">
            <div className="container">

                {/* Long Discription */}
                <div className="input-box flex relative">

                    <div className="input-field w-full absolute focus-within:static scale-0 focus-within:scale-100">
                        <div className="">
                            <ReactQuill
                                onChange={handleQuillChange}
                                value={rawQuillValue}
                                placeholder='Long Discription'
                                id="long_discription" 
                                name="long_discription"
                                modules={modules}
                                className='h-72 [&_.ql-toolbar.ql-snow]:!bg-white [&_.ql-editor.ql-blank::before]:!text-white'
                                theme="snow"
                            />
                        </div>

                        <input type="checkbox" name="show_long_discription" id="show_long_discription" className='opacity-0' />

                    </div>

                    <label htmlFor="show_long_discription" className=" input-label py-0 [&_svg]:hover:animate-none [&_svg]:animate-pulse">
                        <div className=''>
                            <MdRateReview className='text-custom-primary text-xl ![animation-duration:1.5s] inline mr-2' />
                            {long_discription && word_count>1?
                                <>
                                    <p className="inline">Long Discription: {word_count} words</p>
                                    <div className='!whitespace-pre-wrap itsLongDispriction' dangerouslySetInnerHTML={{__html:long_discription}}></div>
                                </>
                                :
                                <p className='inline'>Long Discription: {temporary_long_discription}</p>
                            } 
                        </div>
                    </label>

                </div>
            </div>
        </section>
    );
};

export default LongDiscriptionSection;