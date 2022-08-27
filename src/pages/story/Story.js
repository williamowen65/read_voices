import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../layout/Container";

export default function Story() {
    const navigate = useNavigate();
    const { stories } = useSelector(
        (state) => state.stories
    );
    const { loggedIn } = useSelector(
        (state) => state.app
    );
    const { slug } = useParams();

    const [thisStory, setThisStory] =
        useState(null);

    useEffect(() => {
        if (stories) {
            const story = stories.filter(
                (el) => el.meta.slug === slug
            );
            if (story) {
                setThisStory(story[0]);
            }
        }
    }, [stories, slug]);

    if (thisStory) {
        if (
            (!loggedIn &&
                thisStory.meta.status ===
                    "private") ||
            (!loggedIn &&
                thisStory.meta.status === "draft")
        ) {
            return (
                <p>
                    What you seek is not on this
                    page
                </p>
            );
        }

        return (
            <StoryStyled>
                <Container
                    maxWidth={1400}
                    className={"mainContainer"}
                >
                    <h2>{thisStory.title}</h2>
                    <p>
                        Lorem ipsum dolor sit,
                        amet consectetur
                        adipisicing elit. Minus
                        exercitationem aut totam
                        explicabo inventore
                        obcaecati saepe, nemo
                        consequuntur amet magni
                        necessitatibus et minima
                        praesentium fugit sequi
                        doloremque asperiores
                        consequatur odit
                        repellendus distinctio
                        harum ut porro at
                        dignissimos! Optio
                        doloribus accusamus,
                        quisquam, nemo dolor iusto
                        eaque, quidem cum veniam
                        ut inventore fugit id quis
                        rerum quod rem consequatur
                        vitae. Aliquam deleniti
                        corporis accusamus earum
                        quae voluptatum,
                        exercitationem ipsam
                        aspernatur vitae dolorum
                        voluptatem architecto,
                        dolor, culpa voluptates
                        nesciunt sapiente
                        molestiae! Voluptatum odit
                        qui iste rerum nesciunt
                        similique voluptas
                        perferendis nostrum.
                        Neque, quo! Odio
                        aspernatur corrupti a
                        repudiandae nulla
                        obcaecati dolores natus
                        accusamus ipsam, repellat
                        consectetur veritatis eum,
                        laudantium assumenda
                        consequatur alias facilis.
                        Eos porro dignissimos,
                        deleniti eius illum hic a,
                        iusto expedita est, labore
                        facilis voluptatum aperiam
                        quidem perspiciatis illo!
                        Commodi animi fugit
                        expedita, nesciunt quos
                        vel aliquid autem
                        quibusdam veniam molestias
                        doloribus consequuntur
                        quod mollitia? Explicabo
                        optio aliquid consequatur
                        maiores a nulla, libero,
                        aliquam quae mollitia
                        provident, accusantium
                        eius. Ipsa harum debitis
                        corrupti voluptatibus
                        placeat cupiditate
                        excepturi sint dolore
                        quae, quidem suscipit
                        neque, facere doloremque
                        rerum cum voluptatum
                        magnam? Eligendi alias, ad
                        obcaecati illo incidunt
                        numquam nihil perferendis
                        dolorum doloribus quam
                        autem assumenda pariatur
                        excepturi deleniti fugiat
                        porro et dolor
                        exercitationem. Quis
                        tenetur commodi magnam
                        saepe alias voluptas
                        iusto, neque quos quam!
                        Omnis sunt, cumque facere
                        ipsam asperiores
                        dignissimos exercitationem
                        animi quia dolorem rerum
                        molestiae, soluta nulla
                        iste velit, dolorum unde
                        nisi at blanditiis earum!
                        Soluta laboriosam tempora
                        nemo in eius doloremque
                        voluptatum. Laborum magni
                        sequi magnam neque quo
                        odit eaque nostrum quas
                        nam corporis. Atque, quia
                        alias consequuntur minus
                        dolorum impedit fuga ipsam
                        sed. Sapiente esse
                        provident modi blanditiis,
                        delectus, optio, possimus
                        perferendis cupiditate
                        maxime pariatur
                        necessitatibus atque iste
                        culpa ipsa alias? Enim,
                        aliquid eos? Perspiciatis
                        porro in at, odit iusto
                        quos voluptatibus
                        molestiae alias repellat
                        deserunt accusamus,
                        accusantium doloribus.
                    </p>
                </Container>
            </StoryStyled>
        );
    }
    return (
        <p>What you seek is not on this page</p>
    );
}

const StoryStyled = styled.div`
    margin: 20px 0;
`;
