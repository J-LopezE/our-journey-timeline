import { Card, CardContent, Skeleton, Stack } from '@mui/material';

export const MomentSkeleton = () => {
    return (
        <Card className="moment-card" sx={{ mb: 4, opacity: 0.6 }}>
            {/* Espacio de la imagen/video */}
            <Skeleton variant="rectangular" width="100%" height={320} animation="wave" />
            
            <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    {/* El Chip de categoría */}
                    <Skeleton variant="rounded" width={80} height={24} />
                </Stack>
                
                {/* Título h5 */}
                <Skeleton variant="text" width="60%" height={32} sx={{ mb: 1 }} />
                
                {/* Descripción body2 */}
                <Skeleton variant="text" width="90%" />
                <Skeleton variant="text" width="40%" />
            </CardContent>
        </Card>
    );
};