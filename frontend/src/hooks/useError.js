import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/user';

export const useError = () => {
	const { error } = useContext(UserContext);
	const [showError, setShowError] = useState(false);

	useEffect(() => {
		if (error) {
			setShowError(true);
			const timer = setTimeout(() => {
				setShowError(false);
			}, 5000);

			return () => clearTimeout(timer);
		}
	}, [error]);

	return { showError, error };
};
