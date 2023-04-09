import styles from "./singleBody.module.css"
import { Open_Sans } from 'next/font/google'
import Image from "next/image"
import scrin from "/public/images/csgofail.jpg"

const open = Open_Sans({ subsets: ['latin', 'cyrillic'], weight: ['400', '600'] })

export default function SingleHead() {
  return (
    <div className={styles.singleBody}>
      <h1 className={styles.singleBody__title}>Промокод для CSFAIL на бесплатные 0.50$</h1>
      <div className={`${styles.singleBody__text}  ${open.className}`}>
        <p>
          Однозначно, некоторые особенности внутренней политики неоднозначны и
          будут разоблачены! <a href="" target="_blank">Господа</a>, консультация с широким активом играет
          важную роль в формировании вывода текущих активов. Однозначно,
          сторонники тоталитаризма в науке освещают чрезвычайно интересные
          особенности картины в целом, однако конкретные выводы, разумеется,
          заблокированы в рамках своих собственных рациональных ограничений.
          Высокий уровень вовлечения представителей целевой аудитории является
          четким доказательством простого факта: высокое качество позиционных
          исследований обеспечивает широкому кругу (специалистов) участие в
          формировании позиций, занимаемых участниками в отношении поставленных
          задач.
        </p>
        <figure class = "frog">
          <Image
            className={styles.swiperSlideImage}
            loading="lazy"
            src={scrin}
            placeholder="blur"
          />
          <figcaption>Промокод кс го феил</figcaption>
        </figure>
        <p>
           В целом, конечно, граница обучения кадров требует от нас
          анализа первоочередных требований. В своём стремлении повысить
          качество жизни, они забывают, что высокое качество позиционных
          исследований требует анализа дальнейших направлений развития. Идейные
          соображения высшего порядка, а также понимание сути ресурсосберегающих
          технологий требует от нас анализа позиций, занимаемых участниками в
          отношении поставленных задач. Противоположная точка зрения
          подразумевает, что стремящиеся вытеснить традиционное производство,
          нанотехнологии представляют собой не что иное, как квинтэссенцию
          победы маркетинга над разумом и должны быть объективно рассмотрены
          соответствующими инстанциями. Для современного мира консультация с
          широким активом позволяет выполнить важные задания по разработке новых
          принципов формирования материально-технической и кадровой базы. Также
          как высококачественный прототип будущего проекта требует анализа
          прогресса профессионального сообщества.
        </p>
      </div>
    </div>
  )
}
