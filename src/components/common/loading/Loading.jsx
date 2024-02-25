import CircularProgress from '@mui/material/CircularProgress';

export const Loading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress
                style={{ color: '#616161', animation: 'spin 2s linear infinite' }}
                thickness={5}
                size={100}
                sx={{
                    '@keyframes spin': {
                        from: { transform: 'rotate(0deg)' },
                        to: { transform: 'rotate(360deg)' },
                    },
                }}
            />
        </div>
    )
}
