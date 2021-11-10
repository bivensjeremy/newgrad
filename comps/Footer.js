import styles from '../styles/Home.module.css'
import Image from 'next/image'
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { Typography } from '@material-ui/core';
import Link from 'next/link'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <footer>
				<Link href='/contactsupport'><a>
					<Typography variant="body2">
						Contact
					</Typography>
					<IconButton color="inherit" size="small">
						<ContactSupportIcon />
					</IconButton>
					<Typography variant="body2">
						Support
					</Typography>
				</a></Link>

              	<Link href="https://bivensblueprint.com">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography>
                    Powered by
                  </Typography>
                  <span>
					  <IconButton>
						  <Image src="/images/BP_Logo.png" alt="Vercel Logo" width={32} height={32} />
					  </IconButton>
                  </span>
                </a>
              	</Link>
			</footer>
        </div>
    );
}

export default Footer;