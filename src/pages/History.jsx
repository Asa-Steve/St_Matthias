import FadeInFromSide from "@/components/FadeInFromSide";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import TopInfo from "@/components/TopInfo";
import { device } from "@/helpers/mediaQueries";
import styled from "styled-components";

const WriteUp = styled.div`
  margin-block: 100px 0;
  text-align: center;
  padding-inline: 1rem;

  h2 {
    margin-bottom: 1rem;
    max-width: 1000px;
    margin-inline: auto;
  }

  @media ${device.desktop} {
    h2 {
      font-size: var(--f-xlg);
    }
  }
`;

const HistorySection = styled.div`
  margin-block: 100px 50px;
  padding: 1rem;
  text-align: justify;

  p {
    margin-block: 1rem;
  }

  @media ${device.desktop} {
    margin-block: 180px 100px;
    max-width: 90%;
    margin-inline: auto;
  }
`;

const ImgWrap = styled.div`
  border: 1px solid red;
  height: 300px;
  width: 100%;
  margin-bottom: 1rem;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media ${device.desktop} {
    height: 500px;
  }
`;

const FloatImgWrap = styled(ImgWrap)`
  @media ${device.desktop} {
    width: 50%;
    float: right;
    height: 400px;
    margin-left: 1rem;
  }
`;
const History = () => {
  return (
    <>
      <TopInfo text="Church History" />
      <FadeInOnScroll>
        <WriteUp>
          <h2>
            A Brief History of St. Matthias Catholic Church, Amarata, Yenagoa,
            Bayelsa State.
          </h2>
        </WriteUp>
      </FadeInOnScroll>
      <HistorySection>
        <FadeInOnScroll>
          <ImgWrap></ImgWrap>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <p>
            The advent of the Catholic Church to Amarata Community was just like
            the same adventures of the church in other parts of the Country. A
            lot of obstacles and difficulties were encountered and surmounted
            before the church took its root. Before the coming of the Catholic
            faith, the church Missionary Society (CMS) had already started their
            Missionary activities here, however the arrival of the Catholic
            faith brought by late Chief Odumgba Agbalikkia brought a religious
            revolution with the conversion of both the CMS members and the
            pagans to the Catholic faith,hence the establishment of the Roman
            Catholic Church in Amarata by one
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <p>
            Rev. Fr. Matthias who opened the first Catholic Church in
            Epie/Atissa clans in 1910, and named the Church St. Matthias Amarata
            and as a matter of fact all the Epie/Atissa Communities were
            introduced to Christianity in 1911. Among the early converts were
            late Obitom Ekpeme, who was the first station chairman, late Johnson
            Ekpeme, late Solomon A. Otiti-Kpuru aka FNB (Fear No-Body). Others
            were late Joshua Opopo, late Nathan Fakimi, late Sunday Odumgba,
            Late Orku Ayowei, Late Victor Ozuagbala and a host of other very
            devoted, faithful and hard-working Christians were the pioneers of
            Catholicism in this area, and to them we give credit for accepting
            the Catholic and Apostolic faith, the true Church to Amarata
            Community. The quest for salvation in the Catholic faith by the
            early converts was not easy and smooth as the people had to make
            tedious journey through the thick forest of Kpansiaen-route to
            Imiringi, Nembe and Brass with the loads on their heads to bring
            Rev. Fathers and later paddle back home via Abonnema and Nembe. It
            will be recalled that the establishment of the Church was associated
            with some painful and agonizing occurrences.
          </p>
        </FadeInOnScroll>

        <FadeInFromSide>
          <FloatImgWrap></FloatImgWrap>
        </FadeInFromSide>
        <FadeInOnScroll>
          <p>
            The early converts were faced with questions about their own
            ancestral worships by their own relatives. Quarrels arose from
            different quarters over this. But in spite of all these hurdles, the
            Church came to stay and has indeed stayed because of the
            preparedness of the people, some of the physical obstacles which
            could have doubted their faith and zeal were overcome. HRM. King
            Festus J. Agulata of blessed memory became the first area Catechist
            in Amarata in the early 40s.
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <p>
            For several years, the people passed through a lot of painful
            experiences like trek through the thick forest of Kpansia via Okaki
            bush to Mbiama,a distance of 30 Kilometers, hired canoe and paddled
            via Join karama to Omoku, Okwuzi and Oguta via the Orashi River, on
            the very duty to seek for salvation. St. Matthias had passed through
            the tutelage of many parishes as an out - station at one time or the
            other. Amarata station was at a point an outpost of Abonnema
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <p>
            Parish and was administered from Port Harcourt under the Vicariate
            of Onitsha, under His Grace Most Rev. Dr. Charles Heerey of blessed
            memory, it latter become part of the vicariate of Owerri and was
            administered from Oguta Parish. Amarata continued to be in the
            Diocese of Owerri and later was transferred to the new parish of
            Ahoada, which became part of the new Diocese of Port- Harcourt in
            1961 under the auspices of Most Rev. Dr. G.P Okoye of Blessed
            Memory. Before St. Matthias attained the status of a Parish (before
            the Nigerian/Biafran civil war 1967-1970) several missionary priests
            and Nigerian priests served at various times in Amarata, worthy of
            mentioning are Rev. Fr. Matthias, Rev. Father O. Conor, Rev. Fr.
            Carroll, Rev. Fr. Youngu, Rev. Fr. Mokoyi, Rev. Father Millet, other
            were Rev. Father P. Maize, Rev. Father Horrigan and Rev. Father
            Egan.
          </p>{" "}
        </FadeInOnScroll>
        <FadeInOnScroll>
          <p>
            After the Civil war in 1970, came Rev. Father P. Omole and Rev.
            Father Christo Obieh1970-71, Rev. Father Thomas Brown and Rev.
            Father Eugene Bree took their turn in June 1973 - February 1975,
            then Rev. Father Charles Agu1975 -1976, Rev. Father Rogers
            Kinane1976 - 1977, Rev. Father Noel Dumphy1977 - 1979, Rev. Father
            John Collins1979 - 1980, Rev. Father Richard Burke March 1980 - Dec.
            1980, Rev. Father Niall Geaney July 1981 – September 1981, Rev.
            Father Joseph Rabbit' November, 1981 - 1982, then came Rev Father L.
            Boniko1982 - 1983 and Msgr. ¬Peter Ohochukwu February, 1984
            -December, 1985. He introduced the Legion of Mary society and
            encouraged the parishioners to move for the creation of the Parish.
            It is worthy to state here that between 1910 to the early eighties,
            Amarata was known as a Catholic Community, because there were no
            other church(es) in the community, eighty five percent of the
            villagers were Catholics with an exception of few persons who kept
            to the worship of their idols.
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <p>
            However, upon the death of the first Catechist HRM King Festus J.
            Agulata in 1981, his younger brother, Late HRM. King Charles B.
            Agulata, who was one of the very strong Catholic and a great
            composer of Epie Songs in the Church (as he usually took the Church
            choristers to Port-Harcourt for singing competitions and often
            returned with victory), left the Church with his entire house hold
            for the fear of the unknown and brought to the community the
            Brotherhood of the cross and star, as such members were scattered
            and only very few were left in the Catholic Church, and those who
            left the Church went in search of immediate solution to their
            spiritual problems. This religion spread in Amarata Community and
            beyond. But a million thanks to Late Catechist Simon D. Obuku, aka
            (Youngest Catechist) and his entire family and the very few persons
            who held on the faith and kept the Church going.
          </p>
        </FadeInOnScroll>
      </HistorySection>
    </>
  );
};

export default History;
