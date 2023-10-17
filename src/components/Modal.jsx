import { useEffect } from "react";

const Modal = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <div>
      {/* modal wrapper */}
      <div
        onClick={closeModal}
        className="fixed top-0 bottom-0 right-0 left-0 bg-slate-300 opacity-90"
      ></div>
      {/* modal container  */}
      <div
        className="border-[1px] border-red-600 w-[500px] h-[500px] overflow-y-scroll fixed"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <div className=" w-full h-full relative p-4">
          <h1>I am from modal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            harum laborum saepe magnam quaerat voluptas, perferendis ex maxime
            impedit provident quia recusandae sunt totam minus omnis
            voluptatibus? Repellendus, libero, provident quia voluptatum vel
            delectus voluptas, repellat similique rem quidem exercitationem ut
            ullam quisquam! Consectetur expedita corrupti consequatur et
            consequuntur amet? Ratione in est dolorum tempore ducimus minus?
            Aut, molestiae? Nisi velit dolorem nesciunt soluta ratione
            excepturi, deleniti officia? Illum labore temporibus molestias
            laborum suscipit pariatur nostrum atque tempore modi officiis
            voluptate quae sequi veritatis fugiat quos hic odio laudantium
            eveniet distinctio consequatur, quo quibusdam deserunt. Esse illum
            officiis qui fuga.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            reiciendis nobis aliquam quisquam atque veritatis ex, quas odio
            natus laudantium in mollitia iste libero officia exercitationem amet
            dicta tenetur recusandae vero perferendis. Mollitia magni temporibus
            autem nulla repellendus, atque sint tenetur aperiam veniam, ipsam
            minima nesciunt incidunt architecto praesentium porro. Non
            consectetur porro, minus aperiam, est autem pariatur quia veniam
            harum facere temporibus nisi impedit tempora fugit aspernatur
            perferendis quae libero nesciunt explicabo, sapiente optio in.
            Corrupti ex quas corporis! Dolor ipsam nemo voluptatem voluptates
            aliquid et iusto molestiae minima ad! Suscipit, deleniti veritatis?
            Itaque ipsam possimus inventore voluptatibus, sit iste? Molestiae
            recusandae alias, qui porro ipsam accusantium esse, dolores eveniet
            dolorem quod ut, soluta minima necessitatibus expedita aut error!
            Velit accusamus laborum hic magnam, possimus ullam atque aspernatur
            ex inventore, natus molestias fugiat tempore sed ad saepe iure porro
            distinctio incidunt alias beatae, aliquam neque dicta commodi. Nam
            aperiam eaque quis id fugiat nostrum voluptate earum libero quod.
            Tempore consequuntur perspiciatis distinctio nesciunt eaque
            obcaecati rem laboriosam repellat quas quidem voluptatem ipsa
            voluptate est dicta officia, eos quis. In minus sapiente itaque
            voluptatibus similique natus necessitatibus minima atque, quaerat
            neque architecto saepe cupiditate odio reprehenderit consequatur
            corrupti ipsam distinctio asperiores culpa? Magni aspernatur quo
            porro ratione odio nihil. Veritatis quia deleniti delectus, amet
            vitae a iusto quam porro alias saepe maiores quisquam corporis
            aspernatur nulla qui quas! Nihil dolores repudiandae ex nemo itaque.
            Provident dolores, nostrum soluta pariatur praesentium labore
            aliquid harum magnam tenetur. Sit, debitis eum praesentium deserunt
            vitae eligendi, ad sint ipsam temporibus eos voluptas quia ullam
            officia id iure laudantium reiciendis! Molestias repudiandae
            perspiciatis nostrum eveniet? Suscipit tempore blanditiis dicta
            praesentium tenetur esse eveniet voluptatibus, impedit corporis,
            repellat voluptatum asperiores itaque, pariatur similique fugiat sit
            architecto. Repellat quidem illum repellendus temporibus nulla natus
            id. Provident dolorum, nobis maiores impedit veniam fugiat earum
            suscipit nesciunt modi reiciendis? Dignissimos saepe maiores
            ratione, iure odit, quidem commodi aperiam aspernatur incidunt
            eveniet unde dolore doloremque iusto repellat cumque dicta
            excepturi? Quos sunt deserunt neque? At alias sapiente praesentium
            est. Deserunt explicabo sit in asperiores ad suscipit magni soluta
            assumenda recusandae alias tempore cupiditate repellendus quidem
            quis, accusamus delectus accusantium nihil nemo sunt maxime
            quibusdam. Dicta quod tempora eum ullam ratione quas error beatae
            aperiam molestias at quaerat dignissimos sapiente quis perspiciatis
            obcaecati mollitia, cupiditate inventore non numquam asperiores
            similique voluptas adipisci. Ipsam nisi nobis repellendus nostrum?
            Beatae, nulla. Optio molestiae odit saepe facere temporibus ab nihil
            aliquid voluptatum. Impedit voluptates quibusdam, nulla iste dolorum
            officiis quia inventore in et rem repellendus perspiciatis
            reprehenderit modi eum nemo voluptatem vero dolor quis natus. Culpa,
            odit? Adipisci ab excepturi sequi nesciunt eius, vel eligendi dolor
            est corporis natus, blanditiis inventore expedita laborum deserunt.
            Earum dolores optio veritatis numquam facilis odio error possimus
            expedita nostrum, quaerat hic, facere, aut quas a quia consectetur
            magni? Dolore vel molestiae officiis! Expedita vel rem alias dicta
            suscipit assumenda esse repudiandae sequi delectus eos nam tempora
            fuga minus atque, nemo animi nesciunt est architecto itaque? Ratione
            atque vel, minus delectus libero omnis velit quam iure quae
            laudantium eaque fugit mollitia reiciendis tenetur possimus! Eaque
            architecto dolorum fugiat beatae. Voluptate cum laboriosam corrupti.
            Dignissimos eveniet temporibus illum reiciendis cum vero.
            Repellendus omnis facilis dignissimos recusandae neque delectus nemo
            nisi asperiores laboriosam expedita unde tempora fugit minus
            deleniti, ab sit deserunt? Praesentium alias perferendis illo ex
            saepe quisquam ea unde corporis, autem modi molestiae tempore earum
            consequuntur fuga quia optio expedita excepturi natus quas esse
            culpa doloribus. Iste dolore pariatur debitis minus quas inventore
            assumenda officia cum nisi iure quibusdam perspiciatis, esse aut
            quisquam quaerat, eveniet placeat asperiores unde numquam ipsam!
            Nostrum nihil odit ipsa adipisci, voluptate aliquam necessitatibus
            perspiciatis quisquam magnam cupiditate quo quia repellendus
            consequuntur laboriosam omnis rem iste. Ut ratione velit, in quo
            fugiat maiores aut, esse nobis facilis ad ipsum ducimus! Quae iusto
            doloremque asperiores. Ex, vel. Maiores a officiis in reiciendis
            delectus. Quisquam, illum. Dolor ipsam eligendi aspernatur est quasi
            maxime, excepturi quis illo! Ducimus distinctio perferendis
            voluptas! Odit, temporibus deleniti. Ut, enim magnam sunt doloremque
            rem fuga dolores sed iusto laudantium modi laborum voluptatum eos
            voluptatibus assumenda asperiores consequatur dolor exercitationem
            quisquam vero atque iste! Maxime perferendis, ullam hic tempore enim
            molestias doloribus sit quisquam id, voluptatibus veniam obcaecati
            incidunt qui repudiandae totam iste itaque esse excepturi officia
            fugiat temporibus, nihil minima recusandae pariatur. Minima adipisci
            fugiat quis? Aspernatur id ullam praesentium porro, sequi error ex!
            Modi nemo ex tenetur, excepturi amet, possimus deleniti velit
            cupiditate aut inventore in maxime voluptatibus officiis ullam
            aliquid temporibus corporis? Consectetur nisi pariatur voluptatibus
            aut, labore, accusamus iure in dolorem doloribus commodi nostrum est
            animi qui atque, libero tempora itaque fuga quam tempore
            necessitatibus. Eum quam eligendi ad maxime, eaque iste ipsam vitae
            mollitia excepturi aliquam tempore pariatur itaque soluta, cum iure
            sint qui vero laudantium. Sint tempore, in harum maiores assumenda
            minus tenetur commodi distinctio voluptates iste ex recusandae
            cumque est ipsa architecto, suscipit nisi corrupti nesciunt
            similique placeat id cupiditate asperiores quae sed. Est doloremque
            enim eligendi ipsum repellendus fuga aliquid voluptas hic officia
            labore error totam sint iste id dicta laborum placeat et earum
            blanditiis qui, dolores accusantium minus minima? Aut dolorum,
            blanditiis facere dolores magnam earum consequuntur illo itaque
            quasi et corrupti animi libero ipsa placeat, accusantium sint enim
            aperiam, fuga mollitia. Adipisci debitis consectetur similique
            libero quia nemo quibusdam expedita, placeat sit tempore, molestias
            ipsam soluta repellendus voluptatem perferendis in, est
            necessitatibus. Suscipit laudantium sunt possimus vitae perferendis
            numquam voluptatibus alias inventore reprehenderit, dolorem nisi,
            impedit quibusdam excepturi facere doloremque. Ipsam corrupti
            consequatur, inventore, quas tempora, nam cumque molestias
            dignissimos doloremque reprehenderit a distinctio quaerat
            necessitatibus ea natus voluptatum illo? Sit non impedit rem sint.
            Totam corporis eius expedita commodi error doloremque iste dolorum
            fugit nemo accusantium molestiae aliquid, adipisci quisquam impedit
            ratione accusamus veniam tempora esse velit quidem exercitationem
            architecto nisi reprehenderit harum? Nesciunt, earum magnam
            voluptate, odio nemo repellendus architecto, ut soluta qui omnis
            doloremque ipsum recusandae. Similique, architecto incidunt
            distinctio recusandae perferendis voluptas nobis libero atque sit
            veniam hic, magni consequuntur labore, ducimus esse praesentium
            assumenda sunt quam quis corporis ut dolor? Deserunt nisi dolor
            corporis consectetur laborum illum aliquid consequuntur incidunt
            fugiat suscipit dolorum dicta sequi nemo harum corrupti labore vitae
            eveniet, dignissimos temporibus voluptatum cum id vero. Qui, ex
            voluptas ea incidunt officia facere quas, reiciendis ipsam numquam
            sunt consequuntur. Illum aliquid, provident, est quia, officia
            nostrum tempore praesentium tenetur cupiditate placeat nam. Est,
            exercitationem? Fugit nostrum, labore aliquid, a accusantium alias
            eveniet ex eligendi facilis, molestiae error inventore corporis
            dicta! Facilis, reiciendis magnam. Ullam facilis, fugit nesciunt
            amet illo aliquid nostrum velit officiis itaque voluptas, quia natus
            impedit exercitationem voluptates? Quidem, a in? Mollitia vel
            possimus error accusamus quasi, eos pariatur eius, consequuntur
            laborum aut voluptate numquam non dicta cumque dolores, quos
            nesciunt dolorum. Voluptates id totam velit error placeat, veritatis
            voluptas labore sint non fugit ad, modi expedita quasi illum!
            Incidunt atque pariatur eveniet enim adipisci perspiciatis facilis
            iusto saepe porro amet, sunt rerum inventore ab minima est quisquam
            iste hic id consectetur ducimus! Animi, modi! Quod similique ex
            voluptatum tempore quis in molestias non odit veniam? Officia
            aperiam minima consectetur ad consequuntur nemo placeat aut! Nihil
            autem eaque itaque vel ipsum corporis possimus, harum atque
            praesentium velit odit blanditiis quam molestias quis saepe
            reprehenderit explicabo fuga! Voluptas atque ea, ab laboriosam at
            ullam officia quisquam est, aut pariatur eaque, ipsum laborum totam
            placeat quae nisi ratione voluptatum soluta ducimus quis suscipit.
            Reiciendis ullam eius ipsam excepturi ab iure a natus iusto
            perspiciatis dicta quaerat aliquam corrupti impedit nihil, aliquid
            expedita. Corporis ex magnam sint. Aliquid tenetur tempore ea odit
            laborum illo. Assumenda iure, officia amet deserunt magnam possimus
            ea? Aliquid expedita et sapiente distinctio accusamus beatae debitis
            nemo est ex eaque adipisci molestiae, autem dolores alias dolore hic
            similique officia laboriosam illo labore aut laudantium nam? Dicta
            explicabo est, maiores repellat nemo culpa praesentium repudiandae
            veritatis blanditiis enim repellendus provident animi quod, alias,
            cumque quidem? Beatae tempore reiciendis fugit vel eveniet.
            Blanditiis dignissimos magnam possimus asperiores temporibus ipsam
            cum, nisi dolores, corporis maxime vitae delectus, quas est ipsum
            praesentium qui officiis. Quas, at cupiditate. Enim ab optio
            accusantium id ratione nulla dolore, debitis excepturi? Sint maxime
            iste dignissimos? Itaque similique aut sequi illum nesciunt nulla et
            reprehenderit qui ex quo sapiente, natus non sit voluptatem.
            Veritatis sapiente inventore culpa architecto aliquam harum quae
            velit optio doloremque consequatur, possimus quia magnam id. Omnis
            voluptatum rem corrupti harum tenetur, ab deserunt, similique
            voluptate dolore, hic blanditiis maxime. Sequi libero dignissimos
            asperiores nostrum, sunt, rerum voluptatibus harum ipsam quae
            incidunt unde enim laborum id, distinctio minus? A fuga totam
            perferendis, tempora facere quos aspernatur natus! Perspiciatis
            voluptatem libero quae eos quasi vero quam culpa facere nemo aut.
            Ducimus soluta magnam beatae aperiam excepturi quaerat, velit
            temporibus illo explicabo alias maiores veniam totam! Quam ducimus
            consectetur culpa temporibus, hic, accusantium harum quod odit neque
            nemo, ullam animi natus autem. Vel distinctio, accusantium fugit
            commodi dolores laudantium culpa obcaecati, vero fuga nemo minus
            voluptatibus harum porro voluptatum deserunt quo dolorem animi
            laborum accusamus exercitationem! Ea rerum libero maiores, nisi vel
            quas perferendis nam ab beatae? Tempore vel blanditiis tempora
            repellat dolor ipsa, voluptatem praesentium suscipit fuga reiciendis
            optio, aliquam porro nobis magni animi ab excepturi alias hic.
            Provident, commodi debitis. Voluptas tempora quam aliquam dicta
            explicabo minima accusantium non provident sequi consectetur
            doloribus, perferendis ducimus totam esse, magni quisquam neque
            possimus ullam reiciendis. Fugiat earum hic sed laudantium corporis
            odio minus inventore praesentium similique ipsum sit magni
            voluptatem autem officiis aliquid vero sequi eius necessitatibus
            ipsa assumenda, at nulla consectetur! Error quos tenetur natus
            doloribus asperiores temporibus corporis eaque quis quidem
            accusantium! Dolores incidunt maiores commodi minima dolore quis
            consequatur rem magnam id maxime officia aliquam ratione aut
            pariatur porro cupiditate cum nemo exercitationem fugit inventore,
            facere assumenda voluptatem! Ratione dolore est hic culpa rem
            incidunt tenetur dolorum necessitatibus expedita debitis reiciendis
            sed id libero laboriosam molestias odit officia, fugiat nobis earum
            veniam corporis! Deleniti, placeat repudiandae cupiditate esse qui
            atque ut eligendi similique dolor earum eum quibusdam voluptatum
            molestias reprehenderit dicta nam dolore porro est eveniet labore
            veniam neque. Dignissimos aperiam ad debitis ipsa perferendis,
            provident ratione officia deleniti amet maxime iste modi eaque totam
            veritatis assumenda earum quas cupiditate adipisci aut voluptas non
            voluptate sint. Nobis, pariatur a accusantium nesciunt optio placeat
            velit vel rerum, dolor quia autem vitae accusamus ipsa ipsam
            inventore ratione dolorum minus doloremque molestias eaque laborum,
            porro ad nihil tempora! Inventore perspiciatis quas quasi, corporis
            at maxime. Consequuntur consectetur tempore eos placeat quisquam a
            et vitae deserunt, eum voluptatem sunt libero id sint veniam. Minima
            tempora similique, maxime iusto architecto odio sapiente sint
            doloribus nam, sunt, ipsa cupiditate aut. Vero magnam non debitis
            temporibus animi! Fugit molestias, nam quam aliquam vitae officiis
            deserunt unde qui temporibus repellendus! Omnis repellendus ipsum
            iste accusamus modi corrupti quidem dolor nihil culpa asperiores
            minus repellat et fuga quas consequuntur ad debitis totam molestiae
            facilis, excepturi vero sed dicta ipsam. Sapiente obcaecati animi
            accusamus illo inventore, reiciendis quis. Repellendus, odit! Alias
            omnis, pariatur distinctio, tenetur dolor reprehenderit aliquid
            error dolores, ut similique qui ipsa neque natus veniam. Consectetur
            quas qui sit praesentium dolore dignissimos soluta enim temporibus,
            aliquid officia recusandae sed cumque ad maiores aut eaque libero.
            Quae, voluptates temporibus, similique reprehenderit minima in
            quidem quos excepturi laudantium commodi omnis quisquam esse dolor
            numquam perferendis nisi odit consequatur necessitatibus impedit
            cupiditate sit, atque magnam nemo. Quia earum voluptatibus illum
            aliquid error delectus molestias nam ducimus repellendus odit!
            Veniam culpa eum reiciendis repellendus assumenda dignissimos enim
            necessitatibus sit ratione, sed, consectetur asperiores corporis
            recusandae, sint molestias eius fugiat aliquid doloremque. Enim
            voluptate adipisci tenetur inventore veritatis eius delectus. Non
            blanditiis facilis eligendi suscipit expedita consequuntur
            voluptatum, cumque eaque explicabo commodi, libero perspiciatis
            velit ab tempora est numquam nisi. Maiores quo at esse porro
            nesciunt, animi nihil nam quibusdam fuga, qui quisquam excepturi
            illum tempora eos facere ea necessitatibus. Eligendi distinctio,
            nisi autem mollitia officia exercitationem maxime nostrum nulla
            deserunt perspiciatis at maiores incidunt doloribus ea repellendus
            culpa cumque enim facere?
          </p>
          <button
            className="absolute  top-1 bg-red-400 text-white right-1 border-[1px] border-red-500 px-2 py-1 w-[30px] h-[30px] flex justify-center items-center rounded-full"
            onClick={closeModal}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
