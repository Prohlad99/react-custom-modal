import { useState } from "react";
import Modal from "./Modal";

const AddProduct = () => {
  const [openModal, setOpenModal] = useState(false);
  const OpenModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <h1>This product page</h1>
      <button
        className="border-[1px] border-green-500 px-2 py-1 rounded-md bg-green-400 text-white "
        onClick={OpenModal}
      >
        Open Modal
      </button>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
        molestias beatae vitae? Accusantium soluta totam porro ipsam libero
        iusto perspiciatis obcaecati voluptatem, unde repudiandae eligendi quae
        quia veniam incidunt vero! Dolores, sint placeat. Nam minima saepe
        sapiente dolores doloremque eaque omnis vitae amet provident
        reprehenderit pariatur temporibus quis, totam quae, deleniti neque error
        laudantium est esse ea! Ex repellat tempora nihil non quo natus
        voluptatem maiores, temporibus dignissimos commodi autem ipsum dolorum
        voluptatibus voluptates ea pariatur consequuntur recusandae labore quis!
        Aspernatur consequatur ea dignissimos culpa omnis earum voluptatibus
        iusto quidem aliquid, pariatur hic deserunt nihil alias praesentium
        veritatis perspiciatis placeat, distinctio quae itaque fugit. Rem cumque
        eum repudiandae id, voluptates corporis sunt ut dolorum architecto dolor
        ullam voluptatibus minus ab ipsum quas enim, vitae esse tenetur illum
        reiciendis obcaecati repellendus debitis. Provident voluptate expedita
        blanditiis exercitationem dolorem laborum commodi eius, similique est
        tempora reiciendis suscipit sapiente dicta odio, non voluptatum facere
        modi culpa explicabo quia ullam nisi. Veritatis eius est, alias ad
        magni, reiciendis accusantium doloribus, dolores beatae animi mollitia
        quidem aliquam itaque optio ea? Iusto veniam obcaecati at itaque illum,
        similique in optio molestias vero eaque maxime eos eum placeat. Fugit
        ut, assumenda ea consequuntur velit reprehenderit perspiciatis a
        doloremque quasi sequi magni magnam soluta! Temporibus facere laudantium
        earum odit suscipit culpa saepe sunt deleniti, architecto provident odio
        aperiam id aspernatur officiis ab eligendi neque. Quasi dignissimos in
        omnis nisi saepe soluta, eius veritatis numquam animi facere consectetur
        velit distinctio necessitatibus, officia harum minima molestiae. Sed
        quam temporibus alias facere dolores voluptas placeat ullam odit fugit
        praesentium iusto porro provident, quas tempore quod quasi, at inventore
        ipsa voluptatum minima magnam qui, perspiciatis officiis libero.
        Obcaecati, dolorum? Eveniet dolore pariatur sequi quisquam quasi officia
        natus porro neque odio voluptas optio modi, quis ipsum possimus odit
        doloribus commodi quibusdam nam et, aliquid velit ut? Error, blanditiis.
        Ipsam iste rem totam quia alias reprehenderit consequuntur suscipit
        consectetur, praesentium, ex, ut fugit! Tempora obcaecati velit at
        repudiandae vel officia voluptate modi soluta ab nemo minima
        perspiciatis consequatur ullam suscipit, adipisci explicabo vero
        deserunt? Doloremque, voluptatibus corporis. Totam maxime sed non
        distinctio libero a corporis, illum ipsum perspiciatis? Voluptatem
        voluptates soluta, incidunt repudiandae unde alias at eum voluptatum,
        pariatur corporis, nulla recusandae. Aliquam assumenda sed totam minima
        enim dicta in, expedita fugiat. Tempore, nam veritatis repellat omnis
        expedita velit quasi corrupti sit, et, sapiente aut repudiandae ut.
        Neque iste ab dignissimos enim ducimus dolorem iure fugit, mollitia
        officiis, corrupti voluptatem voluptatum quisquam dolor reiciendis
        minima sed officia ut. Optio mollitia totam exercitationem excepturi,
        esse perferendis asperiores facilis explicabo, veniam ipsum quia, dolore
        alias amet ullam. Atque deleniti quis suscipit optio nostrum unde
        veritatis nemo! Et enim quasi, omnis quibusdam, nostrum alias est harum
        esse ullam natus amet libero non. Atque eaque, et dolorum, labore iste
        soluta perspiciatis libero neque aliquam molestiae saepe laborum?
        Reprehenderit, quaerat excepturi rerum tenetur temporibus aspernatur est
        non at sit debitis expedita, doloribus explicabo assumenda corporis!
        Neque, perferendis eum fugiat maiores minus hic adipisci quia quibusdam
        dignissimos odio voluptatum fuga repellendus modi quod expedita quo,
        debitis ducimus exercitationem at temporibus consectetur veniam ab
        libero iste? Fugiat harum delectus dicta accusamus obcaecati nostrum
        molestiae quia, aspernatur incidunt id quos alias quaerat, voluptatum ad
        repudiandae similique odit inventore officiis. Nemo labore debitis quod!
        Omnis qui, itaque animi at quidem repellendus distinctio vel, eum
        laborum optio error voluptate iste, deserunt unde eos dicta. Sunt minus
        assumenda delectus sit perferendis pariatur vero dicta iure placeat unde
        veritatis error adipisci, eum veniam. Laboriosam quibusdam nisi
        recusandae earum dolor animi quae. Vel assumenda velit magni voluptatem
        vitae fuga facilis cupiditate aliquam cumque neque rerum veritatis nam,
        omnis veniam? Aliquid obcaecati molestias porro iure facilis odit error
        sunt excepturi, quasi dolorem non dicta quas ipsam officiis accusantium
        cumque ea quisquam autem impedit. Sit nobis inventore saepe dolores qui
        nemo, eos accusamus corporis quod, porro ea illo? Dolor ullam molestiae,
        ab dicta officia mollitia quo ipsum labore repudiandae magni maiores
        fuga. Facere, inventore quis, sunt suscipit quod exercitationem
        quibusdam beatae nesciunt, doloribus recusandae adipisci cum voluptates
        molestias aliquid temporibus sint! Soluta doloribus mollitia rerum culpa
        aut molestias explicabo harum ex accusantium ipsum minima incidunt
        facilis, magni id rem obcaecati ipsa fuga architecto in similique
        dolorem praesentium consequuntur nostrum! Odio debitis quis dignissimos
        quasi, odit aspernatur qui perferendis laborum vero possimus modi ea
        inventore quisquam soluta nulla aliquam numquam cum ipsum animi! Earum
        ipsum omnis, officia autem ea debitis ad qui minus necessitatibus
        quisquam reprehenderit est. Recusandae saepe nemo deserunt aliquid iste
        ipsa vel unde, animi excepturi sequi delectus tempore ut blanditiis
        voluptas temporibus accusantium iure quis magnam minus minima vero
        asperiores? Natus molestiae accusamus sunt dolores molestias iusto
        soluta quam ea quas labore, doloremque impedit? Illum ex quo vero
        itaque! Debitis, magni ab sit veniam dolores dicta accusamus voluptate
        earum eius nobis odit eos aperiam quas consectetur, dolorum omnis, minus
        quisquam deserunt labore ipsa nulla temporibus. Est optio at maxime
        voluptates adipisci labore minus, quisquam magni architecto? Vitae
        dolores id dicta accusantium dolorum adipisci dolorem unde iusto nam
        quidem nostrum, officia voluptas velit facilis commodi, repellendus
        totam corrupti, nesciunt eveniet eligendi? Sit magni repellat quis aut
        numquam optio, aliquid accusantium placeat quia suscipit. Sunt fugit
        veritatis quas recusandae odit at illum eos sit esse a sed dignissimos
        corrupti, molestiae ex ducimus unde facere aperiam. Quis, neque minus
        omnis mollitia eum ab itaque doloremque quasi doloribus necessitatibus
        libero totam sapiente enim saepe, modi quae similique, aperiam
        dignissimos quod earum natus dolorum minima ad ducimus. Eveniet quos
        tenetur aliquid omnis officia molestias, reiciendis odit quisquam
        similique sint nulla dicta facilis veritatis hic laboriosam aliquam
        quibusdam modi sit soluta illo. Laudantium asperiores magnam, at eaque
        quos voluptate, fugiat consectetur numquam, harum ut quaerat eius
        repellendus quas pariatur atque? Blanditiis incidunt in non recusandae
        ut nisi consequatur neque. Veniam recusandae dicta veritatis a, eveniet,
        ullam enim facere soluta voluptatum aliquid sunt dolorem vel vero iure
        delectus. Quo, enim ut! Necessitatibus sapiente iure quis at quasi
        itaque repellat vero, dignissimos quisquam quo veritatis iste, a fugit.
        Quia laborum fugiat ab officia maxime incidunt ducimus eaque omnis vero
        perspiciatis sint facere sapiente inventore dolor non quos sit doloribus
        velit asperiores, odio minus accusamus id. Porro eveniet blanditiis ipsa
        pariatur corrupti qui voluptatem perspiciatis totam ducimus, eligendi ex
        quod voluptatum dolorum dolor architecto asperiores quae, unde dolorem
        quis. Sed explicabo in blanditiis mollitia. Exercitationem expedita nemo
        eveniet aliquam totam debitis pariatur laudantium aperiam, laboriosam
        quibusdam aliquid rerum, aut architecto tempore odio possimus at harum
        natus. Sit fugiat maxime possimus modi nisi consectetur autem molestiae
        ipsum temporibus expedita quos sequi odio ab similique, iste tempora
        excepturi amet ratione tenetur necessitatibus corrupti quidem accusamus
        itaque distinctio. Atque corrupti perferendis eaque id. Quam, eius ut!
        Officiis labore sequi, fugit, voluptatem pariatur id quisquam mollitia
        vitae, voluptates omnis dolorem possimus perspiciatis velit illum minus
        quis deserunt nostrum corporis magnam reprehenderit qui aliquid
        voluptatibus. Totam quaerat ex rem, sapiente corporis, aspernatur at
        incidunt porro doloremque facere quae voluptatum omnis illum, harum
        asperiores maxime suscipit inventore reprehenderit deserunt. Maxime
        neque perferendis fugiat ea nesciunt reiciendis, nam libero incidunt ex
        qui quo quas est dolore illo nemo, quaerat laboriosam reprehenderit
        quidem autem? Illum aliquid molestiae, quasi tenetur, eveniet nulla sed
        fugiat, necessitatibus neque nostrum cupiditate doloremque libero
        similique cumque praesentium non quia accusamus aut quos atque
        temporibus laboriosam voluptatum! Labore, reiciendis quasi distinctio
        laboriosam odit praesentium, aut autem repellat quibusdam temporibus
        pariatur quas hic! Nemo illum saepe itaque ut consectetur laudantium
        repellendus eaque quos esse labore aut hic quidem ratione, nam nihil
        rerum mollitia laborum culpa sequi. Aliquid provident vitae vero debitis
        laboriosam voluptatibus, excepturi consectetur quod adipisci totam ea,
        optio tenetur eius velit? Sint ab odit omnis distinctio illum id maiores
        quos illo eius quo inventore aliquid dolores quis, natus nesciunt, iure
        temporibus. Doloremque rem minima, est architecto officia maxime itaque
        cumque facere temporibus doloribus non suscipit repellendus, quam unde
        animi ipsam neque cum vero reprehenderit sunt dolor tempora voluptas!
        Sequi, ex optio? Alias adipisci totam odio ea fuga id enim pariatur quam
        nobis ratione porro nostrum animi molestias minus incidunt similique
        recusandae quis eos, delectus, veniam libero hic. Sequi odio nostrum,
        dolorem provident sapiente, quod repellat nulla sunt molestias rem id
        quas obcaecati quam, laborum totam. Veritatis unde sed aliquid quas ex,
        maxime eius illum culpa omnis. Nulla aliquid dicta maxime assumenda
        nesciunt, beatae praesentium quidem ipsa, minima quae facilis at.
        Aspernatur quis perferendis unde voluptatum! At corporis maxime, illum
        aliquid similique dolore aspernatur omnis rem placeat, rerum obcaecati,
        ab optio consequatur iure tempora. Accusamus facilis odio consequatur
        soluta repudiandae, qui reiciendis officia, dignissimos incidunt
        molestiae id et quasi nisi blanditiis, quam temporibus consectetur
        beatae omnis nemo recusandae? Natus similique, excepturi eos dolorum
        laudantium id minima. Libero, nihil dolore adipisci eos culpa explicabo
        quod. Accusamus aliquid dignissimos id sed, laborum neque quibusdam
        iusto delectus doloremque. Et delectus hic totam aspernatur, nulla
        laboriosam laborum perferendis quia quas eum quisquam corrupti quidem
        nam nostrum blanditiis, dolore ipsa dolores fugiat mollitia sint velit
        necessitatibus. Qui amet ex dolorum beatae maiores consequuntur voluptas
        provident veritatis labore dignissimos, itaque, aliquam, nihil quos
        dolore. Blanditiis illum eaque consequatur earum minus distinctio qui
        unde asperiores voluptatem beatae dolores enim quisquam laudantium
        officiis sit commodi ad quod dolorum impedit voluptas eligendi, sint
        rerum nemo! Animi iure autem facere iusto quo excepturi ea commodi odio
        voluptates porro, perferendis, harum sapiente asperiores fugit eum ad,
        dicta quos. Quaerat amet rerum nemo ab. Laudantium est sed, repellendus,
        mollitia amet aliquam harum eum quo dicta obcaecati unde commodi totam
        nesciunt at corporis alias molestias? Consequatur esse tenetur fuga quas
        modi, aliquam vero qui, est delectus tempore molestiae excepturi,
        accusantium rerum consequuntur. Recusandae nulla veritatis corporis
        velit iste dolores, mollitia expedita minima neque, voluptas eveniet
        nesciunt dolore modi fuga maiores nihil officia! Consectetur velit vel,
        unde dignissimos corporis iusto totam dolorem repudiandae praesentium
        voluptas nulla minus tempore et dicta quasi perferendis labore sequi
        iure dolores tenetur architecto? Aliquid sit, ipsam laborum facere
        corporis necessitatibus quas tempore omnis ipsum sunt atque veniam
        ratione in pariatur autem nihil beatae asperiores reprehenderit nemo
        animi, reiciendis soluta assumenda earum! Recusandae nobis molestias
        facere eum laudantium repellendus dolorum incidunt, dolores obcaecati
        sit optio pariatur aut nisi iste ducimus quas facilis tempora tempore.
        Sed excepturi dignissimos rem vero, error beatae facilis, tempora
        voluptatibus, modi possimus rerum qui minima doloribus quam aliquid nemo
        doloremque placeat esse dicta non eius? Non, incidunt laborum
        voluptatibus iusto nam, deserunt cum adipisci dolorum minus ipsam sunt
        ex iure, tenetur libero ut praesentium saepe alias consequatur eveniet.
        Sunt minima reprehenderit voluptatem dolore hic, doloribus ea laborum,
        inventore ullam distinctio perferendis dolorem velit mollitia illum iste
        veniam et quis architecto provident eius, iusto expedita aspernatur
        eligendi fugit! Suscipit ut fugit sit repudiandae soluta blanditiis
        molestiae sapiente repellendus. Enim officia suscipit assumenda quas
        praesentium ipsam quibusdam aspernatur sequi error. Placeat fugit,
        delectus neque a necessitatibus ab architecto laborum modi. Iure dolores
        vero deleniti numquam sed rerum, consectetur, odio perferendis
        consequuntur nemo ipsa laudantium laboriosam esse vel nulla? Veniam hic
        quibusdam mollitia adipisci quod rerum vel, error totam nemo! Id facilis
        iure modi autem sint. Itaque enim voluptates magnam dolorem vel
        reiciendis id placeat, sed omnis quidem illo impedit cupiditate earum
        similique, quas veritatis numquam. Alias reiciendis, adipisci soluta
        recusandae impedit suscipit facere tenetur, dicta sint eaque cumque
        accusamus minima enim. Consequatur ea nostrum non, quod nesciunt ratione
        modi quam quibusdam, animi facere sint tempora delectus minima magni
        recusandae eligendi similique voluptatem. Ipsam reiciendis repellendus
        officiis, inventore soluta ratione, iure, corrupti neque saepe quas qui?
        Corrupti sapiente officiis eum in debitis voluptatem culpa itaque
        laborum error eius ad quam doloribus iure, a amet fugit similique
        expedita eligendi ab aut necessitatibus ex corporis? Vitae voluptatibus
        consequatur repellendus ab sed doloribus natus suscipit, autem eaque
        iure sapiente culpa, distinctio dicta aliquam iste laboriosam
        dignissimos impedit qui voluptas commodi deserunt! Omnis, inventore
        vitae autem non dolorum provident perspiciatis illo odit, commodi,
        tempora excepturi dolorem unde eveniet corporis quod facere ullam aut
        quas harum ratione? Distinctio atque nesciunt officiis veritatis
        architecto quisquam molestias voluptatibus laudantium. Accusantium
        repellendus quod repudiandae ullam vero necessitatibus doloremque! Atque
        consectetur explicabo ipsum laboriosam eveniet corporis praesentium aut!
      </p>
      {openModal && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default AddProduct;
