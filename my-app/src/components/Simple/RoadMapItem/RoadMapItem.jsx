import s from './RoadMapItem.module.scss';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const RoadMapItem = forwardRef(({ listItems, title, num, status }, ref) => {

    return (

        <div ref={ref} className={`${s.body_item} ${status ? s.body_item_done : s.body_item_not_done}`}>
            
            <div className={s.content}>

                <div className={s.num_card}>

                    <h3>{num}</h3>

                </div>

                <div className={s.text}>

                    <h4>{title}</h4>

                    <ul>
                        {
                            listItems?.map((item) => {
                                return <li>{item}</li>
                            })

                        }
                    </ul>


                </div>

            </div>

            <div className={s.point}></div>

        </div>

    )

})

export default RoadMapItem;
export const MRoadMapItem = motion(RoadMapItem);