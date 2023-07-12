import Link from 'next/link';
import * as AiIcons from 'react-icons/ai';
import Image from 'next/image';

function Footer() {
    const currentYear = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
    });
    return (
        <footer className="footer-area md:pt-[120px] pt-[60px]">
            <div className="footer-top">
                <div className="custom-container">
                    <div className="lm:grid xl:grid-cols-5 lm:grid-cols-12 xl:gap-x-[30px] gap-[30px]">
                        <div className="max-lg:col-span-12">
                            <div className="footer-logo">
                                <Image
                                    src="/images/logo/logotrans.png"
                                    alt="Logo"
                                    width={280}
                                    height={170}
                                />
                            </div>
                        </div>
                        <div className="fixed-lg:col-span-3 fixed-md:col-span-2 fixed-lm:col-span-6 max-sm:pt-[30px]">
                            <div className="footer-widget-item">
                                <h2 className="title">Links</h2>
                                <ul className="footer-list mt-[25px]">
                                    <li>
                                        <Link href="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/about">Career</Link>
                                    </li> */}
                                    <li>
                                        <Link href="/posts">News</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="fixed-lg:col-span-5 fixed-md:col-span-4 fixed-lm:col-span-6 max-sm:pt-[35px]">
                            <div className="footer-widget-item">
                                <h2 className="title">Contact</h2>
                                <ul className="contact-info mt-[25px]">
                                    <li>16 Sydney ST</li>
                                    <li>Kilmore, Victoria, Australia 3764</li>
                                    <li>
                                        <Link href="mailto:contact@exploreeducationandtraining.com.au">
                                            <a className="hover:text-black transition-all">
                                                contact@exploreeducationandtraining.com.au
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="tel:+0084-912-3548-073">
                                            <a className="hover:text-black transition-all">
                                                03 4710 5966
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="fixed-lg:col-span-1 fixed-md:col-span-1 fixed-lm:col-span-1 max-sm:pt-[30px]" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="custom-container">
                    <div className="inner-container border-[#dfdfdf] border-t md:mt-[95px] mt-[50px] py-9">
                        <div className="md:grid md:grid-cols-12 flex flex-col">
                            <div className="md:col-span-4 max-lm:order-last max-lm:pt-[10px]">
                                <div className="copyright flex-wrap md:justify-start justify-center md:mb-0 mb-[10px]">
                                    © {currentYear}
                                    Made with © by
                                    <a target="_blank">
                                        <span>
                                            {' '}
                                            Marek J. Reid -
                                            enquire@marekreid.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
