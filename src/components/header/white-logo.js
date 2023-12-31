import Link from 'next/link';
import Image from 'next/image';

function WhiteLogo() {
    return (
        <Link href="/">
            <a className="inline-block align-middle leading-[1]">
                <Image
                    src="/images/logo/logotrans.png"
                    alt="Logo"
                    width={120}
                    height={70}
                />
            </a>
        </Link>
    );
}

export default WhiteLogo;
