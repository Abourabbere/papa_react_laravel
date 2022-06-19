import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Transition } from '@mantine/core';
import { ArrowUp } from 'tabler-icons-react';

function TopScroll() {

    const [scroll, scrollTo] = useWindowScroll();

    return (
        <Affix position={{ bottom: 20, right: 20 }}>
            <Transition transition="slide-up" mounted={scroll.y > 0}>
                {(transitionStyles) => (
                    <Button
                        leftIcon={<ArrowUp />}
                        style={transitionStyles}
                        onClick={() => scrollTo({ y: 0 })}
                    >
                        je susidc defweok
                    </Button>
                )}
            </Transition>
        </Affix>
    )
}

export default TopScroll